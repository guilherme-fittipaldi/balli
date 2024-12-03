import axios from "axios";
import { NextResponse } from "next/server";

const API_KEY = process.env.OPENAI_API_KEY;
const BASE_URL = "https://api.openai.com/v1/assistants";

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json(
      { message: "API Key is missing in environment variables" },
      { status: 500 }
    );
  }

  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "OpenAI-Beta": "assistants=v2",
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Error fetching assistants:", error?.response?.data || error);
    return NextResponse.json(
      {
        message: "Failed to fetch assistants",
        error: error?.response?.data || "Unknown error",
      },
      { status: 500 }
    );
  }
}
