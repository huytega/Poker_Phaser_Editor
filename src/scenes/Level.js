
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// poker_table_frankenstein
		this.add.image(353, 719, "poker_table_frankenstein");

		// ace_of_hearts
		const ace_of_hearts = this.add.image(300, 1275, "ace_of_hearts");
		ace_of_hearts.scaleX = 0.4353197956700402;
		ace_of_hearts.scaleY = 0.4353197956700402;
		ace_of_hearts.angle = -9;

		// ace_of_hearts_1
		const ace_of_hearts_1 = this.add.image(380, 1271, "ace_of_hearts");
		ace_of_hearts_1.scaleX = 0.39242688077598337;
		ace_of_hearts_1.scaleY = 0.39242688077598337;
		ace_of_hearts_1.angle = 5;

		// back_red
		const back_red = this.add.image(58, 458, "back-red");
		back_red.scaleX = 0.2910674313704832;
		back_red.scaleY = 0.2910674313704832;
		back_red.angle = -13;

		// back_red_1
		const back_red_1 = this.add.image(93, 460, "back-red");
		back_red_1.scaleX = 0.2910674313704832;
		back_red_1.scaleY = 0.2910674313704832;
		back_red_1.angle = 11;

		// back_red_2
		const back_red_2 = this.add.image(552.8230207002252, 467.73207177067763, "back-red");
		back_red_2.scaleX = 0.2910674313704832;
		back_red_2.scaleY = 0.2910674313704832;
		back_red_2.angle = -13;

		// back_red_3
		const back_red_3 = this.add.image(587.8230207002252, 469.73207177067763, "back-red");
		back_red_3.scaleX = 0.2910674313704832;
		back_red_3.scaleY = 0.2910674313704832;
		back_red_3.angle = 11;


		// back_red_5
		const back_red_5 = this.add.image(63.84623180036702, 682.266815258432, "back-red");
		back_red_5.scaleX = 0.2910674313704832;
		back_red_5.scaleY = 0.2910674313704832;
		back_red_5.angle = 11;

		// back_red_6
		const back_red_6 = this.add.image(650.0957370050428, 683.8892613529199, "back-red");
		back_red_6.scaleX = 0.2910674313704832;
		back_red_6.scaleY = 0.2910674313704832;
		back_red_6.angle = -13;

		// back_red_7
		const back_red_7 = this.add.image(685.0957370050428, 685.8892613529199, "back-red");
		back_red_7.scaleX = 0.2910674313704832;
		back_red_7.scaleY = 0.2910674313704832;
		back_red_7.angle = 11;

		// back_red_8
		const back_red_8 = this.add.image(37, 1050, "back-red");
		back_red_8.scaleX = 0.2910674313704832;
		back_red_8.scaleY = 0.2910674313704832;
		back_red_8.angle = -13;

		// back_red_9
		const back_red_9 = this.add.image(72, 1052, "back-red");
		back_red_9.scaleX = 0.2910674313704832;
		back_red_9.scaleY = 0.2910674313704832;
		back_red_9.angle = 11;

		// _5_of_clubs
		const _5_of_clubs = this.add.image(256, 820, "5_of_clubs");
		_5_of_clubs.scaleX = 0.3638877092609989;
		_5_of_clubs.scaleY = 0.3638877092609989;

		// _5_of_diamonds
		const _5_of_diamonds = this.add.image(157, 818, "5_of_diamonds");
		_5_of_diamonds.scaleX = 0.3638877092609989;
		_5_of_diamonds.scaleY = 0.3638877092609989;

		// jack_of_spades
		const jack_of_spades = this.add.image(355, 820, "jack_of_spades");
		jack_of_spades.scaleX = 0.3638877092609989;
		jack_of_spades.scaleY = 0.3638877092609989;

		// jack_of_diamonds
		const jack_of_diamonds = this.add.image(449, 821, "jack_of_diamonds");
		jack_of_diamonds.scaleX = 0.3638877092609989;
		jack_of_diamonds.scaleY = 0.3638877092609989;

		// ace_of_hearts_2
		const ace_of_hearts_2 = this.add.image(540, 821, "ace_of_hearts");
		ace_of_hearts_2.scaleX = 0.3638877092609989;
		ace_of_hearts_2.scaleY = 0.3638877092609989;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
