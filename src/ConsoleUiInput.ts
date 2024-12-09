import { UiInput } from "./UiInput";
import * as readline from "node:readline/promises";
import { stdin } from "node:process";

export class ConsoleUiInput implements UiInput {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({ input: stdin });
  }

  async requestInput() {
    return this.rl.question("");
  }
}
