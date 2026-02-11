import intents from "../Pages/chatbot.json";

const normalize = (text) =>
  text.toLowerCase().replace(/[^\w\s]/g, "").trim();

const findIntent = (input) => {
  for (const intent of intents.intents) {
    for (const pattern of intent.patterns) {
      if (input.includes(pattern)) {
        return intent;
      }
    }
  }
  return null;
};

export const getBotReply = (userInput) => {
  const cleaned = normalize(userInput);
  const intent = findIntent(cleaned);

  if (!intent) {
    return "Sorry 😅 I didn’t understand that. Try asking about skills or projects.";
  }

  const responses = intent.responses;
  return responses[Math.floor(Math.random() * responses.length)];
};
