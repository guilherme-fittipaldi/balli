export const formatAssistants = (arr: any[]) => {
  return arr.map((obj: { name: string }, index) => {
    if (obj.name === `1. Concepção de produto`) {
      return {
        ...obj,
        prompt:
          "Com base nas informações anteriores do chat e seguindo as instruções que você foi treinado faça a concepção do meu curso.",
      };
    }
    if (obj.name === "2. Mecanismo Único") {
      return {
        ...obj,
        prompt:
          "Com base nas informações anteriores do chat, seguindo as instruções que você foi treinado, gere o mecanismo do meu produto. Utilize como exemplo a estrutura do documento enviado juntamente com o texto, replicando a lógica de organização, as seções e a abordagem metodológica. Certifique-se de seguir à risca essa estrutura, aplicando-a ao contexto do novo produto em desenvolvimento. Para informações que não forem obtidas diretamente dos dados fornecidos, utilize sua criatividade para preenchê-las, sempre garantindo coerência com o propósito do produto. Não faça perguntas adicionais e conclua o planejamento de forma autônoma e completa.",
      };
    }
    if (obj.name === "3. Concepção do Posicionamento") {
      return {
        ...obj,
        prompt:
          "Posicionamento: Com base nas informações anteriores do chat, seguindo as instruções que você foi treinado, gere a concepção do posicionamento do meu produto. Utilize como exemplo a estrutura do documento enviado juntamente com o texto, replicando a lógica de organização, as seções e a abordagem metodológica. Certifique-se de seguir à risca essa estrutura, aplicando-a ao contexto do novo produto em desenvolvimento. Para informações que não forem obtidas diretamente dos dados fornecidos, utilize sua criatividade para preenchê-las, sempre garantindo coerência com o propósito do produto. Não faça perguntas adicionais e conclua o planejamento de forma autônoma e completa. O destaque de quem sou você poderia elaborar melhor a história contando de forma mais profunda, detalhando cada fase da história e usar muito mais histórias para contar tudo de forma completa, não tenha medo de criar um roteiro grande, quanto mais melhor",
      };
    }
    if (obj.name === "4. Estratégia Macro") {
      return {
        ...obj,
        prompt:
          "Com base nas informações anteriores do chat, seguindo as instruções que você foi treinado, gere a Estratégia Macro. Utilize como exemplo a estrutura do documento enviado juntamente com o texto, replicando a lógica de organização, as seções e a abordagem metodológica. Certifique-se de seguir à risca essa estrutura, aplicando-a ao contexto do novo produto em desenvolvimento. Para informações que não forem obtidas diretamente dos dados fornecidos, utilize sua criatividade para preenchê-las, sempre garantindo coerência com o propósito do produto. Não faça perguntas adicionais e conclua o planejamento de forma autônoma e completa. Defina o Nome do Evento. Para criar um nome atraente e memorável para o evento de lançamento, é importante que ele reflita o valor ou o benefício principal do infoproduto. O nome deve capturar a atenção do público-alvo e gerar curiosidade. Além disso, é fundamental que o nome do evento seja coerente com o tema e a promessa do infoproduto, reforçando assim a mensagem principal",
      };
    }
    if (obj.name === "5. Fase de Atração") {
      return {
        ...obj,
        prompt: `Gere 5 roteiros para fase de atração do meu produto focando em mostrar a oportunidade que ele oferece descritas na concepção de produto nos tópicos: Passo 10: Criar uma Proposta Revolucionária Passo 11: Comunicar a Solução Eficazmente Passo 12: Identificar a Transformação Final Passo 13: Desenvolver a Frase da Transformação Os conteúdos detalhados e informativos sobre o meu produto que vão além do básico, oferecendo insights valiosos, exemplos práticos e orientações claras para o público. Estruture o conteúdo de forma que ele ensine algo novo ao leitor, incluindo sugestões, técnicas avançadas ou curiosidades pouco conhecidas. Embora o objetivo seja criar um conteúdo rico e envolvente, manter uma voz profissional e informativa, evitando a linguagem casual típica de UGC. Utilize exemplos para ilustrar pontos-chave e organizar o texto em tópicos claros, facilitando a leitura e a retenção. das informações. Lembre-se de nunca usar o nome ou mencionar o produto nessa fase, o intuito do conteúdo é chamar a atenção do espectador através da transformação da solução e entregar um conteúdo altamente informativo de forma que ele sinta o desejo de acompanhar os conteúdos diários do perfil do Instagram do usuário Lembre-se de nunca usar o nome ou mencionar o produto nessa fase, o intuito do conteúdo é chamar a atenção do espectador através da transformação da solução e entregar um conteúdo altamente informativo de forma que ele sinta o desejo de acompanhar os conteúdos diários do perfil do Instagram do usuário

Faça mais 5 seguindo a mesma lógica, porém acrescentando gatilhos mentais de autoridade e apelo emocional usando a história do usuário descrita no Onboarding, e pode ser ainda mais persuasivo no gancho inicial e ser bem profundo no roteiro, quanto mais conteúdo e mais elaborado melhor, além disso gere um roteiro 3 vezes mais completo que o anterior.
Faça mais 5 conteúdos voltados sempre a mostrar a oportunidade e com conteúdo denso, porém acrescente dados reais sobre o mercado que mostram de maneira lógica que o conhecimento transmitido geram muitas oportunidades, dados são essenciais nesse momento.
Excelente, agora faça os últimos 5 roteiros unindo o estilo dos 3 pedidos anteriores, oportunidade, dados e apelo emocional, não tenha medo de fazer um roteiro realmente grande, quanto mais profundo melhor, tendo em vista que você precisa unir a história dela com apelo emocional, dados e a oportunidade que o produto oferece através da sua transformação.
`,
      };
    }
    if (obj.name === "6. Script de Captura") {
      return {
        ...obj,
        prompt: `Prompt: Com base nas informações anteriores do chat e seguindo as instruções que você foi treinado gere 5 roteiros para fase de captação do meu produto 
Faça mais 5 seguindo a mesma lógica, porém acrescentando gatilhos mentais de autoridade e apelo emocional usando a história do usuário descrita no Onboarding, e pode ser ainda mais persuasivo no gancho inicial e ser bem profundo no roteiro, quanto mais conteúdo e mais elaborado melhor, além disso gere um roteiro 3 vezes mais completo que o anterior.
Faça mais 5 conteúdos voltados sempre a mostrar a oportunidade e com conteúdo denso, porém acrescente dados reais sobre o mercado que mostram de maneira lógica que o conhecimento transmitido geram muitas oportunidades, dados são essenciais nesse momento.
Excelente, agora faça os últimos 5 roteiros unindo o estilo dos 3 pedidos anteriores, oportunidade, dados e apelo emocional, não tenha medo de fazer um roteiro realmente grande, quanto mais profundo melhor, tendo em vista que você precisa unir a história dela com apelo emocional, dados e a oportunidade que o produto oferece através da sua transformação.
`,
      };
    }
    if (obj.name === "7. Página de Captura") {
      return {
        ...obj,
        prompt: `Com base nas informações anteriores do chat, seguindo as instruções que você foi treinado, gere a página de captura do meu produto. Utilize como exemplo a estrutura do documento enviado juntamente com o texto, replicando a lógica de organização, as seções e a abordagem metodológica. Certifique-se de seguir à risca essa estrutura, aplicando-a ao contexto do novo produto em desenvolvimento. Para informações que não forem obtidas diretamente dos dados fornecidos, utilize sua criatividade para preenchê-las, sempre garantindo coerência com o propósito do produto. Não faça perguntas adicionais e conclua o planejamento de forma autônoma e completa. `,
      };
    }
    if (obj.name === "8. Fase de Distribuição") {
      return {
        ...obj,
        prompt: `Com base nas informações anteriores do chat e seguindo as instruções que você foi treinado gere 5 roteiros para fase de distribuição do meu produto Esses roteiros devem possuir conteúdo extremamente denso e profundo, não tenha medo de fazer um roteiro bem grande, quanto maior e mais desenvolvido melhores Esses roteiros devem destrinchar algum tópico do mecanismo do usuário, você não deve vender nada nessa etapa, apenas entregar um conteúdo de alto valor como se fosse uma aula ou um tutorial UGC Lembre-se de sempre iniciar o roteiro com um gancho extremamente persuasivo, não se preocupe em ser sensacionalista, quanto mais persuasivo melhor

Seguindo a mesma lógica crie mais 7 roteiros, 1 para cada etapa do mecanismo que você criou na fase onboarding

Muito bom, agora faça mais 7 roteiros, sempre mostrando a oportunidade e com conteúdo denso, porém fornecendo dados reais sobre o mercado que mostram de maneira lógica que o mercado possui muitas oportunidades, dados são essenciais, leve em consideração as informaçòes do onboarding, concepção do produto e mecanismo Eu quero conteúdo com base nas 7 etapas do mecanismo que você gerou

Excelente, agora faça os últimos 5 roteiros unindo o estilo dos 3 pedidos anteriores, oportunidade, dados e apelo emocional, não tenha medo de fazer um roteiro realmente grande, quanto mais profundo melhor, tendo em vista que você precisa unir a história dela com apelo emocional, dados e a oportunidade que o produto oferece através da sua transformação
`,
      };
    }
    if (obj.name === "9. Fase de lembrete") {
      return {
        ...obj,
        prompt: `Com base nas informações anteriores do chat, seguindo as instruções que você foi treinado, gere a Fase de lembrete do meu produto. Utilize como exemplo a estrutura do documento enviado juntamente com o texto, replicando a lógica de organização, as seções e a abordagem metodológica. Certifique-se de seguir à risca essa estrutura, aplicando-a ao contexto do novo produto em desenvolvimento. Para informações que não forem obtidas diretamente dos dados fornecidos, utilize sua criatividade para preenchê-las, sempre garantindo coerência com o propósito do produto. Não faça perguntas adicionais e conclua o planejamento de forma autônoma e completa. `,
      };
    }
    if (obj.name === "10. Fase de eventos") {
      return {
        ...obj,
        prompt:
          "Com base nas informações anteriores do chat, seguindo as instruções que você foi treinado, gere a Fase de evento do meu produto. Utilize como exemplo a estrutura do documento enviado juntamente com o texto, replicando a lógica de organização, as seções e a abordagem metodológica. Certifique-se de seguir à risca essa estrutura, aplicando-a ao contexto do novo produto em desenvolvimento. Para informações que não forem obtidas diretamente dos dados fornecidos, utilize sua criatividade para preenchê-las, sempre garantindo coerência com o propósito do produto. Não faça perguntas adicionais e conclua o planejamento de forma autônoma e completa",
      };
    }
    if (obj.name === "11. Fase de Vendas") {
      return {
        ...obj,
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
    if (obj.name === "12. Fase de Remarketing") {
      return {
        ...obj,
        prompt: `Com base nas informações anteriores do chat e seguindo as instruções que você foi treinado gere roteiro de 5 criativos de remarketing do lançamento do meu infoproduto
Gere mais 5 roteiros
`,
      };
    }
    return { ...obj, name: "" };
  });
};
