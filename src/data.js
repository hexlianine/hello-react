export class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  win() {
    this.score++;
  }

  lose() {
    this.score--;
  }
}
