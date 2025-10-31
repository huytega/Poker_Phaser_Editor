export default class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.load.image("table", "assets/table/table.png");
    this.load.image("chip", "assets/chips/red.png");
    this.load.atlas("cards", "assets/cards/cards.png", "assets/cards/cards.json");
  }

  create() {
    this.scene.start("Table");
  }
}
