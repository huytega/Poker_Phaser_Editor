import Phaser from "phaser";
import Boot from "./scenes/Boot";
import Preload from "./scenes/Preload";
import Lobby from "./scenes/Lobby";
import Table from "./scenes/Table";

window.addEventListener("load", () => {
  const game = new Phaser.Game({
    width: 1280,
    height: 720,
    backgroundColor: "#2f2f2f",
    parent: "game-container",
    scene: [Boot, Preload, Lobby, Table],
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT,
      autoCenter: Phaser.Scale.Center.CENTER_BOTH,
    },
  });

  game.scene.start("Preload");
});
