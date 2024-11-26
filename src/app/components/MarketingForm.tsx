"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React, { Dispatch, SetStateAction } from "react";

interface MarketingFormProps {
  setMessage: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<number>>;
  step: number;
}

export const MarketingForm: React.FC<MarketingFormProps> = ({
  setMessage,
  setStep,
  step,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whoAreYou: "",
    targetMarket: "",
    studentBenefits: "",
    significantResults: "",
    testimonials: "",
    transformationSteps: "",
    timeToResults: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(
      ` Gere o texto com base nessas informações:
        1. Quem você é? ${formData.whoAreYou}; 
        2. Qual mercado você está atuando? ${formData.targetMarket}; 
        3. Quais os benefícios o aluno vai ter? ${formData.studentBenefits};
        4. Quais resultados significativos você alcançou? ${formData.significantResults};
        5. Depoimentos e histórias de clientes que se beneficiaram do seu acompanhamento: ${formData.testimonials};
        6. Qual passo a pessoa deve seguir para alcançar a transformação que você promete? ${formData.transformationSteps};
        7. Em quanto tempo os participantes começam a ver resultado? ${formData.timeToResults};
`
    );
    setStep(1);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Onboarding</CardTitle>
      </CardHeader>
      <CardContent>
        {step === 0 ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="whoAreYou">Quem é você?</Label>
              <Textarea
                id="whoAreYou"
                name="whoAreYou"
                value={formData.whoAreYou}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="targetMarket">
                Qual mercado você está atuando?
              </Label>
              <Input
                id="targetMarket"
                name="targetMarket"
                value={formData.targetMarket}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="studentBenefits">
                Quais os benefícios o aluno vai ter?
              </Label>
              <Textarea
                id="studentBenefits"
                name="studentBenefits"
                value={formData.studentBenefits}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="significantResults">
                Quais resultados significativos você alcançou?
              </Label>
              <Textarea
                id="significantResults"
                name="significantResults"
                value={formData.significantResults}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="testimonials">
                Depoimentos e histórias de clientes que se beneficiaram do seu
                acompanhamento
              </Label>
              <Textarea
                id="testimonials"
                name="testimonials"
                value={formData.testimonials}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="transformationSteps">
                Qual passo a pessoa deve seguir para alcançar a transformação
                que você promete?
              </Label>
              <Textarea
                id="transformationSteps"
                name="transformationSteps"
                value={formData.transformationSteps}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="timeToResults">
                Em quanto tempo os participantes começam a ver resultado?
              </Label>
              <Input
                id="timeToResults"
                name="timeToResults"
                value={formData.timeToResults}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </form>
        ) : (
          "Concluído"
        )}
      </CardContent>
    </Card>
  );
};
