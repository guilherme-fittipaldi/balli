import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.OPENAI_API_KEY;
const BASE_URL = "https://api.openai.com/v1/assistants";
// const ASSISTANT_ID = process.env.ASSISTANT_ID; // ID do assistente configurado


export default async function handler(req: NextApiRequest, res: NextApiResponse) {  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { threadId, command, assistantId } = req.body;

    const response = await axios.post(
      `${BASE_URL}/${assistantId}/threads/${threadId}/run`,
      { input: command },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    // console.error(
    //   "Error running command:",
    //   error.response?.data || error.message
    // );
    res
      .status(500)
      .json({ message: "Failed to run command", error: error });
  }
}
