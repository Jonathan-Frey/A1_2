import { Dice } from "./Dice";

export class Player {
  private _points = 0;
  constructor(dice: Dice) {}

  get points() {
    return this._points;
  }

  hit() {
    this._points += 2;
  }
}
