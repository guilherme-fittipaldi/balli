"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

interface AssistantListProps {
  message: string;
  step: number;
}

export const AssistantList: React.FC<AssistantListProps> = ({
  message,
  step,
}) => {
  const [assistants, setAssistants] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingResponse, setLoadingResponse] = useState(false);
  const [response, setResponse] = useState("");

  // Fetch the list of assistants
  useEffect(() => {
    const fetchAssistants = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/assistant/list");

        const { data } = await res.json();

        console.log(data);
        const atualizarNomes = (arr: any[]) => {
          return arr.map((obj: { name: string }, index) => {
            if (obj.name === "Copy of Concepção de Produto") {
              return {
                ...obj,
                name: `1. Concepção de Produto`,
                prompt:
                  "Com base nas informações anteriores do chat e seguindo as instruções que você foi treinado faça a concepção do meu curso.",
              };
            }
            if (
              obj.name === "Copy of Concepção de Produto 2" //||
              // obj.name === "Copy of Copy of Concepção de Produto"
            ) {
              return {
                ...obj,
                name: `2. Mecanismo Único`,
                prompt:
                  "Com base nas informações anteriores do chat, seguindo as instruções que você foi treinado, gere o mecanismo do meu produto. Utilize como exemplo a estrutura do documento enviado juntamente com o texto, replicando a lógica de organização, as seções e a abordagem metodológica. Certifique-se de seguir à risca essa estrutura, aplicando-a ao contexto do novo produto em desenvolvimento. Para informações que não forem obtidas diretamente dos dados fornecidos, utilize sua criatividade para preenchê-las, sempre garantindo coerência com o propósito do produto. Não faça perguntas adicionais e conclua o planejamento de forma autônoma e completa.",
              };
            }
            if (obj.name === "Copy of Estratégia Macro") {
              return {
                ...obj,
                name: "4. Estratégia Macro",
                prompt:
                  "Com base nas informações anteriores do chat, seguindo as instruções que você foi treinado, gere a Estratégia Macro. Utilize como exemplo a estrutura do documento enviado juntamente com o texto, replicando a lógica de organização, as seções e a abordagem metodológica. Certifique-se de seguir à risca essa estrutura, aplicando-a ao contexto do novo produto em desenvolvimento. Para informações que não forem obtidas diretamente dos dados fornecidos, utilize sua criatividade para preenchê-las, sempre garantindo coerência com o propósito do produto. Não faça perguntas adicionais e conclua o planejamento de forma autônoma e completa. Defina o Nome do Evento. Para criar um nome atraente e memorável para o evento de lançamento, é importante que ele reflita o valor ou o benefício principal do infoproduto. O nome deve capturar a atenção do público-alvo e gerar curiosidade. Além disso, é fundamental que o nome do evento seja coerente com o tema e a promessa do infoproduto, reforçando assim a mensagem principal",
              };
            }
            if (obj.name === "Copy of Fase de Atração") {
              return {
                ...obj,
                name: "5. Fase de Atração",
                prompt: `Gere 5 roteiros para fase de atração do meu produto focando em mostrar a oportunidade que ele oferece descritas na concepção de produto nos tópicos: Passo 10: Criar uma Proposta Revolucionária Passo 11: Comunicar a Solução Eficazmente Passo 12: Identificar a Transformação Final Passo 13: Desenvolver a Frase da Transformação Os conteúdos detalhados e informativos sobre o meu produto que vão além do básico, oferecendo insights valiosos, exemplos práticos e orientações claras para o público. Estruture o conteúdo de forma que ele ensine algo novo ao leitor, incluindo sugestões, técnicas avançadas ou curiosidades pouco conhecidas. Embora o objetivo seja criar um conteúdo rico e envolvente, manter uma voz profissional e informativa, evitando a linguagem casual típica de UGC. Utilize exemplos para ilustrar pontos-chave e organizar o texto em tópicos claros, facilitando a leitura e a retenção. das informações. Lembre-se de nunca usar o nome ou mencionar o produto nessa fase, o intuito do conteúdo é chamar a atenção do espectador através da transformação da solução e entregar um conteúdo altamente informativo de forma que ele sinta o desejo de acompanhar os conteúdos diários do perfil do Instagram do usuário Lembre-se de nunca usar o nome ou mencionar o produto nessa fase, o intuito do conteúdo é chamar a atenção do espectador através da transformação da solução e entregar um conteúdo altamente informativo de forma que ele sinta o desejo de acompanhar os conteúdos diários do perfil do Instagram do usuário

Faça mais 5 seguindo a mesma lógica, porém acrescentando gatilhos mentais de autoridade e apelo emocional usando a história do usuário descrita no Onboarding, e pode ser ainda mais persuasivo no gancho inicial e ser bem profundo no roteiro, quanto mais conteúdo e mais elaborado melhor, além disso gere um roteiro 3 vezes mais completo que o anterior.
Faça mais 5 conteúdos voltados sempre a mostrar a oportunidade e com conteúdo denso, porém acrescente dados reais sobre o mercado que mostram de maneira lógica que o conhecimento transmitido geram muitas oportunidades, dados são essenciais nesse momento.
Excelente, agora faça os últimos 5 roteiros unindo o estilo dos 3 pedidos anteriores, oportunidade, dados e apelo emocional, não tenha medo de fazer um roteiro realmente grande, quanto mais profundo melhor, tendo em vista que você precisa unir a história dela com apelo emocional, dados e a oportunidade que o produto oferece através da sua transformação.
`,
              };
            }
            if (obj.name === "Copy of Script de Captura") {
              return {
                ...obj,
                name: "6. Script de Captura",
                prompt: `Prompt: Com base nas informações anteriores do chat e seguindo as instruções que você foi treinado gere 5 roteiros para fase de captação do meu produto 
Faça mais 5 seguindo a mesma lógica, porém acrescentando gatilhos mentais de autoridade e apelo emocional usando a história do usuário descrita no Onboarding, e pode ser ainda mais persuasivo no gancho inicial e ser bem profundo no roteiro, quanto mais conteúdo e mais elaborado melhor, além disso gere um roteiro 3 vezes mais completo que o anterior.
Faça mais 5 conteúdos voltados sempre a mostrar a oportunidade e com conteúdo denso, porém acrescente dados reais sobre o mercado que mostram de maneira lógica que o conhecimento transmitido geram muitas oportunidades, dados são essenciais nesse momento.
Excelente, agora faça os últimos 5 roteiros unindo o estilo dos 3 pedidos anteriores, oportunidade, dados e apelo emocional, não tenha medo de fazer um roteiro realmente grande, quanto mais profundo melhor, tendo em vista que você precisa unir a história dela com apelo emocional, dados e a oportunidade que o produto oferece através da sua transformação.
`,
              };
            }
            if (obj.name === "Página de Captura") {
              return {
                ...obj,
                name: "7. Página de Captura",
                prompt: `Com base nas informações anteriores do chat, seguindo as instruções que você foi treinado, gere a página de captura do meu produto. Utilize como exemplo a estrutura do documento enviado juntamente com o texto, replicando a lógica de organização, as seções e a abordagem metodológica. Certifique-se de seguir à risca essa estrutura, aplicando-a ao contexto do novo produto em desenvolvimento. Para informações que não forem obtidas diretamente dos dados fornecidos, utilize sua criatividade para preenchê-las, sempre garantindo coerência com o propósito do produto. Não faça perguntas adicionais e conclua o planejamento de forma autônoma e completa. `,
              };
            }
            if (obj.name === "Copy of Fase de Distribuição") {
              return {
                ...obj,
                name: "8. Fase de Distribuição",
                prompt: `Com base nas informações anteriores do chat e seguindo as instruções que você foi treinado gere 5 roteiros para fase de distribuição do meu produto Esses roteiros devem possuir conteúdo extremamente denso e profundo, não tenha medo de fazer um roteiro bem grande, quanto maior e mais desenvolvido melhores Esses roteiros devem destrinchar algum tópico do mecanismo do usuário, você não deve vender nada nessa etapa, apenas entregar um conteúdo de alto valor como se fosse uma aula ou um tutorial UGC Lembre-se de sempre iniciar o roteiro com um gancho extremamente persuasivo, não se preocupe em ser sensacionalista, quanto mais persuasivo melhor

Seguindo a mesma lógica crie mais 7 roteiros, 1 para cada etapa do mecanismo que você criou na fase onboarding

Muito bom, agora faça mais 7 roteiros, sempre mostrando a oportunidade e com conteúdo denso, porém fornecendo dados reais sobre o mercado que mostram de maneira lógica que o mercado possui muitas oportunidades, dados são essenciais, leve em consideração as informaçòes do onboarding, concepção do produto e mecanismo Eu quero conteúdo com base nas 7 etapas do mecanismo que você gerou

 Excelente, agora faça os últimos 5 roteiros unindo o estilo dos 3 pedidos anteriores, oportunidade, dados e apelo emocional, não tenha medo de fazer um roteiro realmente grande, quanto mais profundo melhor, tendo em vista que você precisa unir a história dela com apelo emocional, dados e a oportunidade que o produto oferece através da sua transformação
`,
              };
            }
            if (obj.name === "Fase de lembrete") {
              return {
                ...obj,
                name: "9. Fase de Lembrete",
                prompt: `Com base nas informações anteriores do chat, seguindo as instruções que você foi treinado, gere a Fase de lembrete do meu produto. Utilize como exemplo a estrutura do documento enviado juntamente com o texto, replicando a lógica de organização, as seções e a abordagem metodológica. Certifique-se de seguir à risca essa estrutura, aplicando-a ao contexto do novo produto em desenvolvimento. Para informações que não forem obtidas diretamente dos dados fornecidos, utilize sua criatividade para preenchê-las, sempre garantindo coerência com o propósito do produto. Não faça perguntas adicionais e conclua o planejamento de forma autônoma e completa. `,
              };
            }
            if (obj.name === "Fase de eventos") {
              return {
                ...obj,
                name: "10. Fase de Evento",
                prompt:
                  "Com base nas informações anteriores do chat, seguindo as instruções que você foi treinado, gere a Fase de evento do meu produto. Utilize como exemplo a estrutura do documento enviado juntamente com o texto, replicando a lógica de organização, as seções e a abordagem metodológica. Certifique-se de seguir à risca essa estrutura, aplicando-a ao contexto do novo produto em desenvolvimento. Para informações que não forem obtidas diretamente dos dados fornecidos, utilize sua criatividade para preenchê-las, sempre garantindo coerência com o propósito do produto. Não faça perguntas adicionais e conclua o planejamento de forma autônoma e completa",
              };
            }
            if (obj.name === "Fase de Vendas") {
              return {
                ...obj,
                name: "11. Fase de Vendas",
                prompt: `Anúncios [criativo] 

Com base informações anteriores do chat e seguindo as instruções que você foi treinado gere 5 roteiros para os criativos de vendas do meu produto
Gere mais 5 roteiros de vendas

Página de Vendas

Com base informações anteriores do chat e seguindo as instruções que você foi treinado crie a página de vendas do meu produto, leve como base a estrutura do documento anexado, siga exatamente a estrutura do documento, não acrescente e nem resuma nada, não tenha medo de entregar algo denso, completo ou um roteiro grande, quanto mais completo melhor
Disparos de Vendas:

Com base informações anteriores do chat e seguindo as instruções que você foi treinado gere os disparos de vendas do lançamento do meu produto, use como base a estrutura do documento anexado, não acrescente e nem resuma nada, siga exatamente a estrutura do documento, não tenha medo de entregar algo denso, completo ou um roteiro grande, quanto mais completo melhor
`,
              };
            }
            if (obj.name === "Fase de Remarketing") {
              return {
                ...obj,
                name: "12. Fase de Remarketing",
                prompt: `Com base nas informações anteriores do chat e seguindo as instruções que você foi treinado gere roteiro de 5 criativos de remarketing do lançamento do meu infoproduto
Gere mais 5 roteiros
`,
              };
            }
            return { ...obj, name: "" };
          });
        };
        const objetosAtualizados = atualizarNomes(data);
        console.log(objetosAtualizados);
        setAssistants(objetosAtualizados);
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
  const handleAssistantClick = async (
    assistantId: string,
    file: string,
    prompt: string
  ) => {
    setLoadingResponse(true);

    try {
      // 1. Criar a thread
      const threadRes = await fetch("/api/assistant/create-thread", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: message + prompt,
          assistantId: assistantId,
          file: file,
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
              .filter(
                (a: { name: string; id: string; prompt: string }) =>
                  a.name !== ""
              )
              .sort((a, b) => {
                const numeroA = parseInt(a.name.split(".")[0], 10);
                const numeroB = parseInt(b.name.split(".")[0], 10);
                return numeroA - numeroB;
              })
              .map(
                (assistant: { name: string; id: string; prompt: string }) => (
                  <Button
                    key={assistant.id}
                    disabled={loadingResponse}
                    onClick={() =>
                      handleAssistantClick(
                        assistant.id,
                        assistant.name.split(".")[0],
                        assistant?.prompt ?? ""
                      )
                    }
                    className=" w-fit px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
                    {assistant.name}
                  </Button>
                )
              )}
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
