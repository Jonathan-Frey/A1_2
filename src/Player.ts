import { Dice } from "./Dice";

export class Player {
  private _points = 0;
  private _dice: Dice;

  constructor(dice: Dice) {
    this._dice = dice;
  }

  get points() {
    return this._points;
  }

  hit() {
    this._points += this._dice.roll();
  }
}
