import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { assistantId, message } = await req.json();

  // Validação do corpo da requisição
  if (!assistantId || !message) {
    return NextResponse.json(
      { message: "Assistant ID and message are required" },
      { status: 400 }
    );
  }

  try {
    // Criação de uma nova execução de thread
    const createThreadResponse = await fetch(
      `https://api.openai.com/v1/threads/runs`,
      {
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
      }
    );

    if (!createThreadResponse.ok) {
      const errorData = await createThreadResponse.json();
      console.error("Error creating thread run:", errorData);
      return NextResponse.json(errorData, {
        status: createThreadResponse.status,
      });
    }

    const run = await createThreadResponse.json();

    // Verifica o status da execução até ser concluída
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
        const errorData = await statusResponse.json();
        console.error("Error fetching thread run status:", errorData);
        throw new Error(
          `Error fetching thread run status: ${statusResponse.status}`
        );
      }

      threadRunStatus = await statusResponse.json();

      console.log(threadRunStatus.status, "opa")

      if (threadRunStatus.status === "completed" || threadRunStatus.status === "failed") {
        isComplete = true;
      } else {
        // Aguarda 1 segundo antes de verificar novamente
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    // Recupera as mensagens da thread concluída
    const replyResponse = await fetch(
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

    if (!replyResponse.ok) {
      const errorData = await replyResponse.json();
      console.error("Error fetching thread messages:", errorData);
      return NextResponse.json(errorData, { status: replyResponse.status });
    }

    const messages = await replyResponse.json();
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      {
        message: "Failed to send message",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
