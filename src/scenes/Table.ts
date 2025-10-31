import Phaser from "phaser";
import { PokerLogic } from "../game/PokerLogic";

export default class Table extends Phaser.Scene {
  private logic: PokerLogic;
  private playerCards: Phaser.GameObjects.Image[] = [];
  private chips: Phaser.GameObjects.Image[] = [];

  constructor() {
    super("Table");
  }

  create() {
    // Thêm bàn poker
    this.add.image(640, 360, "table").setScale(1.2);

    // Khởi tạo logic
    this.logic = new PokerLogic();
    this.logic.shuffle();

    // Title
    this.add.text(640, 50, 'Texas Hold\'em Poker', {
      fontSize: '36px',
      color: '#ffffff',
      fontFamily: 'Arial'
    }).setOrigin(0.5);

    // Debug info
    this.add.text(10, 10, 'Press SPACE: Deal | D: Debug', {
      fontSize: '14px',
      color: '#ffff00'
    });

    // Keyboard shortcuts
    this.input.keyboard?.on('keydown-SPACE', () => {
      this.dealPlayerCards();
    });

    this.input.keyboard?.on('keydown-D', () => {
      console.log('Current cards:', this.playerCards);
      console.log('Deck remaining:', this.logic);
    });

    this.input.keyboard?.on('keydown-C', () => {
      // Clear cards
      this.playerCards.forEach(card => card.destroy());
      this.playerCards = [];
    });

    // Button DEAL
    const dealButton = this.add.text(640, 650, 'DEAL CARDS', {
      fontSize: '24px',
      color: '#ffffff',
      backgroundColor: '#ff6600',
      padding: { x: 30, y: 15 }
    }).setOrigin(0.5)
      .setInteractive({ useHandCursor: true });

    dealButton.on('pointerdown', () => {
      console.log('Deal button clicked!');
      dealButton.setStyle({ backgroundColor: '#cc5500' });
      this.dealPlayerCards();
    });

    dealButton.on('pointerover', () => {
      dealButton.setScale(1.1);
      dealButton.setStyle({ backgroundColor: '#ff8833' });
    });

    dealButton.on('pointerout', () => {
      dealButton.setScale(1);
      dealButton.setStyle({ backgroundColor: '#ff6600' });
    });

    // Hiển thị chips
    this.addChips();

    // Tự động chia bài đầu tiên
    this.dealPlayerCards();
  }

  private dealPlayerCards() {
    // Xóa bài cũ nếu có
    this.playerCards.forEach(card => card.destroy());
    this.playerCards = [];

    // Shuffle và deal
    this.logic.shuffle();
    const cards = this.logic.deal(2);

    // Chia 2 lá bài với animation
    cards.forEach((cardKey, index) => {
      const card = this.add.image(640, 360, cardKey);
      card.setScale(0);
      card.setAlpha(0);
      
      this.playerCards.push(card);

      // Animation bay ra
      this.tweens.add({
        targets: card,
        x: 500 + (index * 150),
        y: 500,
        scale: 0.8,
        alpha: 1,
        duration: 500,
        delay: index * 200,
        ease: 'Back.easeOut'
      });

      // Làm card có thể click
      card.setInteractive({ useHandCursor: true });
      card.on('pointerover', () => {
        card.setScale(0.9);
        card.y -= 20;
      });
      card.on('pointerout', () => {
        card.setScale(0.8);
        card.y = 500;
      });
      card.on('pointerdown', () => {
        console.log(`Card clicked: ${cardKey}`);
      });
    });
  }

  private addChips() {
    const chipColors = ['red', 'green', 'purple', 'yellow', 'aquablue'];
    chipColors.forEach((color, index) => {
      const chip = this.add.image(150 + (index * 60), 650, `chip-${color}`);
      chip.setScale(0.4);
      chip.setInteractive({ useHandCursor: true });
      
      chip.on('pointerdown', () => {
        console.log(`${color} chip clicked!`);
        // Animation khi click chip
        this.tweens.add({
          targets: chip,
          scale: 0.5,
          duration: 100,
          yoyo: true
        });
      });

      chip.on('pointerover', () => {
        chip.setScale(0.45);
      });

      chip.on('pointerout', () => {
        chip.setScale(0.4);
      });

      this.chips.push(chip);
    });
  }
}
