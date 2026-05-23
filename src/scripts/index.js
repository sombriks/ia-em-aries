import { CreateMLCEngine } from "../web-llm/index.js";

const model = "Llama-3.2-1B-Instruct-q4f16_1-MLC";

export const engine = await CreateMLCEngine(model, {
  logLevel: "INFO",
  initProgressCallback: (progress) => {
    console.log("Loading progress:", progress);
  }
});
