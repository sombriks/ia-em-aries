import { CreateMLCEngine } from "../web-llm/index.js";

const zodiac = ["♈︎", "♉︎", "♊︎", "♋︎", "♌︎", "♍︎", "♎︎", "♏︎", "♐︎", "♑︎", "♒︎", "♓︎"];
const zodiload = document.getElementById("zodiload");

const model = "Llama-3.2-1B-Instruct-q4f16_1-MLC";
// const model = "SmolLM2-135M-Instruct-q0f16-MLC";

export const engine = await CreateMLCEngine(model, {
  logLevel: "INFO",
  initProgressCallback: (progress) => {
    console.log("Loading progress:", progress);
    if (zodiac.length > 0) {
      const symbol = zodiac.shift();
      zodiload.innerHTML += `<span>${symbol}</span>`;
    }
  }
});