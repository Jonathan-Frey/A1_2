export class Dice {
  private faces: number;
  constructor(faces: number = 6) {
    this.faces = faces;
  }

  size() {
    return this.faces;
  }
}
