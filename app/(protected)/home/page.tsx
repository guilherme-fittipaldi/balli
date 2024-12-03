"use client";

import { useState } from "react";
import { AssistantList } from "../_components/AssistantsList";
import { MarketingForm } from "../_components/MarketingForm";

export default function Home() {
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(0);
  return (
    <div className="flex flex-col gap-4 p-4">
      <MarketingForm setMessage={setMessage} onboarding={step} setOnboarding={setStep} />
      <AssistantList message={message} step={step} />
    </div>
  );
}
