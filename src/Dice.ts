import { RandomGenerator } from "./RandomGenerator";

export interface Dice {
  size(): number;

  roll(): number;
}
