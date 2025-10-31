import Phaser from "phaser";

export default class Lobby extends Phaser.Scene {
  constructor() {
    super("Lobby");
  }

  create() {
    this.add.text(640, 300, "Poker Lobby", { fontSize: "40px", color: "#fff" }).setOrigin(0.5);
    
    const btn = this.add.text(640, 400, "Join Table ▶", { 
      fontSize: "30px", 
      color: "#00ff00",
      backgroundColor: "#003300",
      padding: { x: 20, y: 10 }
    }).setOrigin(0.5)
      .setInteractive({ useHandCursor: true });

    btn.on("pointerdown", () => {
      console.log('Join Table button clicked!');
      this.scene.start("Table");
    });

    btn.on("pointerover", () => {
      btn.setScale(1.1);
    });

    btn.on("pointerout", () => {
      btn.setScale(1);
    });
  }
}
