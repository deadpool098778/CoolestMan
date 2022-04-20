const { Client } = require("blooketjs");
const client = new Client({ token: process.env.token })

console.log("Joining blooket...");
client.join(886286, "GetRektLol");

cliebt.on("Ready", () => {
  console.log("Ready!")
});

client.on("join", () => {
  console.log("I joined the Kahoot!");
});

client.on("question", question => {
  console.log("A new question has started, answering the first answer.");
  question.submit(question.answer[0])
});

client.on("end", () => {
  console.log("The quiz has ended.");
});
