import Phaser from "phaser";

export default class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    // Load bàn poker
    this.load.image("table", "assets/table/poker_table_frankenstein.png");
    
    // Load chips (định dạng webp)
    this.load.image("chip-red", "assets/chips/red.webp");
    this.load.image("chip-green", "assets/chips/green.webp");
    this.load.image("chip-purple", "assets/chips/purple.webp");
    this.load.image("chip-yellow", "assets/chips/yellow.webp");
    this.load.image("chip-aquablue", "assets/chips/aquablue.webp");

    // Load các lá bài từ file SVG
    const suits = { S: "spades", H: "hearts", D: "diamonds", C: "clubs" };
    const ranks = {
      A: "ace", K: "king", Q: "queen", J: "jack",
      "10": "10", "9": "9", "8": "8", "7": "7",
      "6": "6", "5": "5", "4": "4", "3": "3", "2": "2"
    };

    for (let [suitCode, suitName] of Object.entries(suits)) {
      for (let [rankCode, rankName] of Object.entries(ranks)) {
        const key = `${rankCode}${suitCode}`;
        const path = `assets/cards/${rankName}_of_${suitName}.svg`;
        this.load.svg(key, path);
      }
    }
  }

  create() {
    this.scene.start("Lobby");
  }
}
