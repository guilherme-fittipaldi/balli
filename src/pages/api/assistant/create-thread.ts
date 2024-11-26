import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { message, assistantId } = req.body;

  try {
    const response = await fetch(`https://api.openai.com/v1/threads/runs`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
        "OpenAI-Beta": "assistants=v2",
      },
      body: JSON.stringify({
        assistant_id: assistantId,
        thread: {
          messages: [
            {
              role: "user",
              content: message,
            },
          ],
        },
      }),
    });

    const run = await response.json();

    // Aguarda a execução da thread ser concluída
    let isComplete = false;
    let threadRunStatus;

    while (!isComplete) {
      const statusResponse = await fetch(
        `https://api.openai.com/v1/threads/${run.thread_id}/runs/${run.id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
            "OpenAI-Beta": "assistants=v2",
          },
        }
      );

      if (!statusResponse.ok) {
        console.error(
          "Failed to fetch thread run status:",
          await statusResponse.json()
        );
        throw new Error(
          `Error fetching thread run status: ${statusResponse.status}`
        );
      }

      threadRunStatus = await statusResponse.json();

      if (threadRunStatus.status === "completed") {
        isComplete = true;
      } else {
        // Aguarda um curto intervalo antes de verificar novamente
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    // Busca as mensagens da thread após a execução ser concluída
    const reply = await fetch(
      `https://api.openai.com/v1/threads/${threadRunStatus.thread_id}/messages`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
          "OpenAI-Beta": "assistants=v2",
        },
      }
    );

    if (!reply.ok) {
      console.error("Failed to fetch messages:", await reply.json());
      throw new Error(`Error fetching messages: ${reply.status}`);
    }

    const messages = await reply.json();
    console.log(messages);

    res.status(200).json(messages);
  } catch (error) {
    console.error("Error creating thread:", error);
    res.status(500).json({ message: "Failed to create thread" });
  }
}
