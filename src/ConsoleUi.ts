import { UiInput } from "./UiInput";
import { UiOutput } from "./UiOutput";

export class ConsoleUi {
  private uiOutput: UiOutput;
  constructor(input: UiInput, output: UiOutput) {
    this.uiOutput = output;
  }

  showWelcome() {
    const welcomeMessage = "Hello, World!";
    this.uiOutput.display(welcomeMessage);
  }
}
