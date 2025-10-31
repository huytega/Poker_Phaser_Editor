export class PokerLogic {
  private deck: string[] = [];

  constructor() {
    this.generateDeck();
  }

  generateDeck() {
    const suits = ["S", "H", "D", "C"];
    const ranks = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
    this.deck = ranks.flatMap(r => suits.map(s => `${r}${s}`));
  }

  shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  deal(count: number) {
    return this.deck.splice(0, count);
  }
}
