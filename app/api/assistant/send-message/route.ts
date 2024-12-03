import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { assistantId, message } = await req.json();

  if (!assistantId || !message) {
    return NextResponse.json(
      { message: "Assistant ID and message are required" },
      { status: 400 }
    );
  }

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
      return NextResponse.json({ status: reply.status });
    }

    return NextResponse.json(reply.json(), { status: 200 });
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json(
      { message: "Failed to send message", error },
      { status: 500 }
    );
  }
}
