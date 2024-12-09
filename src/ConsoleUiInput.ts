import { UiInput } from "./UiInput.js";
import * as readline from "node:readline/promises";

export class ConsoleUiInput implements UiInput {
  private rl: readline.Interface;

  constructor(input: NodeJS.ReadableStream) {
    this.rl = readline.createInterface({ input });
  }

  async requestInput() {
    return this.rl.question("");
  }
}
