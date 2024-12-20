import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.OPENAI_API_KEY;
const BASE_URL = "https://api.openai.com/v1/assistants";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log(API_KEY);
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "OpenAI-Beta": "assistants=v2",
      },
    });

    res.status(200).json(response.data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error fetching assistants:", error);
    res.status(500).json({
      message: "Failed to fetch assistants",
      error: error?.response?.data,
    });
  }
}
