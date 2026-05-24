import { CreateMLCEngine } from "../web-llm/index.js";

const zodiac = ["♈︎", "♉︎", "♊︎", "♋︎", "♌︎", "♍︎", "♎︎", "♏︎", "♐︎", "♑︎", "♒︎", "♓︎"];
const zodiload = document.getElementById("zodiload");
const spirit = document.getElementById("spirit");

const models = [
  "SmolLM2-360M-Instruct-q0f16-MLC",
  "Llama-3.2-1B-Instruct-q4f16_1-MLC",
  "Qwen2.5-Coder-0.5B-Instruct-q4f16_1-MLC",
  "Phi-3.5-mini-instruct-q4f16_1-MLC-1k",
  "TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC",
  "snowflake-arctic-embed-m-q0f32-MLC-b4"
];
const model = models[Math.floor(Math.random() * models.length)];
export const engine = await CreateMLCEngine(model, {
  logLevel: "INFO",
  initProgressCallback: (progress) => {
    console.log("Loading progress:", progress);
    spirit.innerHTML = model + " : " + Math.round(progress.progress * 100) + "%";
    if (zodiac.length > 0) {
      const symbol = zodiac.shift();
      zodiload.innerHTML += `<span>${symbol}</span>`;
    }
  }
});