"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

interface AssistantListProps {
  message: string;
  step: number
}

export const AssistantList: React.FC<AssistantListProps> = ({ message, step }) => {
  const [assistants, setAssistants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingResponse, setLoadingResponse] = useState(false);
  const [response, setResponse] = useState("");

  // Fetch the list of assistants
  useEffect(() => {
    const fetchAssistants = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/assistant/list");
        console.log(res);
        const data = await res.json();
        console.log(data);
        setAssistants(data.data || []);
      } catch (error) {
        console.error("Error fetching assistants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAssistants();
  }, []);

  useEffect(() => console.log(response), [response]);

  // Handle assistant selection
  const handleAssistantClick = async (assistantId: string) => {
    setLoadingResponse(true);

    try {
      // 1. Criar a thread
      const threadRes = await fetch("/api/assistant/create-thread", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: message,
          assistantId: assistantId,
        }),
      });

      if (!threadRes.ok) throw new Error("Failed to create thread");

      const threadData = await threadRes.json();
      // const threadId = threadData.thread_id;

      // const messageData = await messageRes.json();
      console.log(threadData?.data);
      setResponse(threadData?.data[0]?.content[0]?.text?.value);
    } catch (error) {
      console.error("Error handling assistant click:", error);
      setResponse("Failed to create thread or send message");
    } finally {
      setLoadingResponse(false);
    }
  };

  return step === 1 ? (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Ações</CardTitle>
      </CardHeader>
      <CardContent>
        {loading && <Spinner />}
        {!loading && assistants.length > 0 ? (
          <div className="flex w-full flex-wrap mt-4 gap-4">
            {assistants
              .filter((a) => !a.name.includes("Copy") && a.name !== "")
              .map((assistant) => (
                <Button
                  key={assistant.id}
                  disabled={loadingResponse}
                  onClick={() => handleAssistantClick(assistant.id)}
                  className=" w-fit px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
                  {assistant.name}
                </Button>
              ))}
          </div>
        ) : (
          <p>No assistants available.</p>
        )}

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Resposta:</h3>
          {!loadingResponse && response && (
            <MarkdownPreview source={response} style={{ padding: 16 }} />
          )}
          {loadingResponse && <Spinner />}
        </div>
      </CardContent>
    </Card>
  ) : (
    <></>
  );
};
