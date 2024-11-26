// src/pages/api/assistant/interact.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { assistantId, messages } = req.body;

  if (!assistantId || !messages || !Array.isArray(messages)) {
    return res
      .status(400)
      .json({ message: "Assistant ID and an array of messages are required" });
  }

  try {
    const API_URL = "https://api.openai.com/v1";
    const headers = {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
      "OpenAI-Beta": "assistants=v2",
    };

    // Step 1: Create a thread
    const threadResponse = await fetch(`${API_URL}/threads`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        title: "New Thread",
      }),
    });

    if (!threadResponse.ok) {
      const errorData = await threadResponse.json();
      return res.status(threadResponse.status).json(errorData);
    }

    const threadData = await threadResponse.json();
    const threadId = threadData.id;

    // Step 2: Add messages to the thread
    for (const message of messages) {
      const messageResponse = await fetch(
        `${API_URL}/threads/${threadId}/messages`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({ message }),
        }
      );

      if (!messageResponse.ok) {
        const errorData = await messageResponse.json();
        return res.status(messageResponse.status).json(errorData);
      }
    }

    // Step 3: Run the thread
    const runResponse = await fetch(
      `${API_URL}/threads/${threadId}/runs`,
      {
        method: "POST",
        headers,
      }
    );

    if (!runResponse.ok) {
      const errorData = await runResponse.json();
      return res.status(runResponse.status).json(errorData);
    }

    const runData = await runResponse.json();

    // Return the response from the assistant
    res.status(200).json({
      threadId,
      assistantResponse: runData,
    });
  } catch (error) {
    console.error("Error interacting with assistant:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}
