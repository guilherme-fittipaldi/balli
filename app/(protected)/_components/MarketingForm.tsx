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
  setOnboarding: Dispatch<SetStateAction<number>>;
  onboarding: number;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  whoAreYou: string;
  targetMarket: string;
  studentBenefits: string;
  significantResults: string;
  testimonials: string;
  transformationSteps: string;
  timeToResults: string;
}

export const MarketingForm: React.FC<MarketingFormProps> = ({
  setMessage,
  setOnboarding,
  onboarding,
}) => {
  const [formData, setFormData] = useState<FormData>({
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
  const [step, setStep] = useState(0);

  const fields = [
    {
      label: "Nome",
      name: "name",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
    },
    {
      label: "Telefone",
      name: "phone",
      type: "tel",
    },
    {
      label: "Quem é você?",
      name: "whoAreYou",
      type: "textarea",
    },
    {
      label: "Qual mercado você está atuando?",
      name: "targetMarket",
      type: "text",
    },
    {
      label: "Quais os benefícios o aluno vai ter?",
      name: "studentBenefits",
      type: "textarea",
    },
    {
      label: "Quais resultados significativos você alcançou?",
      name: "significantResults",
      type: "textarea",
    },
    {
      label:
        "Depoimentos e histórias de clientes que se beneficiaram do seu acompanhamento",
      name: "testimonials",
      type: "textarea",
    },
    {
      label:
        "Qual passo a pessoa deve seguir para alcançar a transformação que você promete?",
      name: "transformationSteps",
      type: "textarea",
    },
    {
      label: "Em quanto tempo os participantes começam a ver resultado?",
      name: "timeToResults",
      type: "text",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleNext = () => {
    if (step < fields.length - 1) {
      setStep(step + 1);
    } else {
      // Salvar no localStorage ao finalizar
      localStorage.setItem("formData", JSON.stringify(formData));
      alert("Formulário salvo com sucesso!");
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const currentField = fields[step];

  const handleSubmit = () => {
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
    setOnboarding(1);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>
          Onboarding - Passo {step + 1} de {fields.length}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {onboarding === 0 ? (
          <form className="space-y-4">
            <div>
              <Label htmlFor={currentField.name}>{currentField.label}</Label>
              {currentField.type === "textarea" ? (
                <Textarea
                  id={currentField.name}
                  name={currentField.name}
                  value={formData[currentField.name as keyof FormData]}
                  onChange={handleInputChange}
                  required
                />
              ) : (
                <Input
                  id={currentField.name}
                  name={currentField.name}
                  type={currentField.type}
                  value={formData[currentField.name as keyof FormData]}
                  onChange={handleInputChange}
                  required
                />
              )}
            </div>

            <div className="flex justify-between">
              <Button
                type="button"
                onClick={handleBack}
                disabled={step === 0}
                variant="outline">
                Voltar
              </Button>
              <Button type="button" onClick={handleNext} className="ml-auto">
                {step < fields.length - 1 ? "Próximo" : "Finalizar"}
              </Button>
            </div>
          </form>
        ) : (
          "Concluído"
        )}
      </CardContent>
    </Card>
  );
  // return (
  //   <Card className="w-full max-w-3xl mx-auto">
  //     <CardHeader>
  //       <CardTitle>Onboarding</CardTitle>
  //     </CardHeader>
  //     <CardContent>
  //       {step === 0 ? (
  //         <form onSubmit={handleSubmit} className="space-y-4">
  //           <div>
  //             <Label htmlFor="name">Nome</Label>
  //             <Input
  //               id="name"
  //               name="name"
  //               value={formData.name}
  //               onChange={handleInputChange}
  //               required
  //             />
  //           </div>
  //           <div>
  //             <Label htmlFor="email">Email</Label>
  //             <Input
  //               id="email"
  //               name="email"
  //               type="email"
  //               value={formData.email}
  //               onChange={handleInputChange}
  //               required
  //             />
  //           </div>
  //           <div>
  //             <Label htmlFor="phone">Telefone</Label>
  //             <Input
  //               id="phone"
  //               name="phone"
  //               type="tel"
  //               value={formData.phone}
  //               onChange={handleInputChange}
  //               required
  //             />
  //           </div>
  //           <div>
  //             <Label htmlFor="whoAreYou">Quem é você?</Label>
  //             <Textarea
  //               id="whoAreYou"
  //               name="whoAreYou"
  //               value={formData.whoAreYou}
  //               onChange={handleInputChange}
  //               required
  //             />
  //           </div>
  //           <div>
  //             <Label htmlFor="targetMarket">
  //               Qual mercado você está atuando?
  //             </Label>
  //             <Input
  //               id="targetMarket"
  //               name="targetMarket"
  //               value={formData.targetMarket}
  //               onChange={handleInputChange}
  //               required
  //             />
  //           </div>
  //           <div>
  //             <Label htmlFor="studentBenefits">
  //               Quais os benefícios o aluno vai ter?
  //             </Label>
  //             <Textarea
  //               id="studentBenefits"
  //               name="studentBenefits"
  //               value={formData.studentBenefits}
  //               onChange={handleInputChange}
  //               required
  //             />
  //           </div>
  //           <div>
  //             <Label htmlFor="significantResults">
  //               Quais resultados significativos você alcançou?
  //             </Label>
  //             <Textarea
  //               id="significantResults"
  //               name="significantResults"
  //               value={formData.significantResults}
  //               onChange={handleInputChange}
  //               required
  //             />
  //           </div>
  //           <div>
  //             <Label htmlFor="testimonials">
  //               Depoimentos e histórias de clientes que se beneficiaram do seu
  //               acompanhamento
  //             </Label>
  //             <Textarea
  //               id="testimonials"
  //               name="testimonials"
  //               value={formData.testimonials}
  //               onChange={handleInputChange}
  //               required
  //             />
  //           </div>
  //           <div>
  //             <Label htmlFor="transformationSteps">
  //               Qual passo a pessoa deve seguir para alcançar a transformação
  //               que você promete?
  //             </Label>
  //             <Textarea
  //               id="transformationSteps"
  //               name="transformationSteps"
  //               value={formData.transformationSteps}
  //               onChange={handleInputChange}
  //               required
  //             />
  //           </div>
  //           <div>
  //             <Label htmlFor="timeToResults">
  //               Em quanto tempo os participantes começam a ver resultado?
  //             </Label>
  //             <Input
  //               id="timeToResults"
  //               name="timeToResults"
  //               value={formData.timeToResults}
  //               onChange={handleInputChange}
  //               required
  //             />
  //           </div>
  //           <Button type="submit" className="w-full">
  //             Enviar
  //           </Button>
  //         </form>
  //       ) : (
  //         "Concluído"
  //       )}
  //     </CardContent>
  //   </Card>
  // );
};
