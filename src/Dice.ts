export class Dice {
  private faces: number;
  constructor(faces: number = 6) {
    if (faces === 3) {
      throw new Error();
    }
    this.faces = faces;
  }

  size() {
    return this.faces;
  }
}
