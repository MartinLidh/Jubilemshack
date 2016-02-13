var cursors;
var charScale = 0.4;

var gameState = {


    create: function(){
	//game.add.plugin(Phaser.Plugin.Debug);
	// game.add.plugin(Phaser.Plugin.Inspector);
	//game.add.image(0, 0, 'bg');
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	cursors = game.input.keyboard.createCursorKeys();
	var w = game.width;
	var h = game.height;
	this.words = game.add.group();
	game.paper = new Paper(game, this.game.width/2, 0, 1);
	game.paper.create();
	game.player = new Player(game);
	//this.spawnWord();

	
	//game.physics.enable(game.player, Phaser.Physics.ARCADE);
	

	//game.add.plugin(Phaser.Plugin.Debug);
	//game.add.plugin(Phaser.Plugin.Inspector);
	//game.add.image(0, 0, 'bg');

	/*
	  player = game.add.sprite(w/4,h-100, 'char');
	  player.scale.setTo(charScale,charScale);
	  player.anchor.setTo(0.5,0.5);
	  game.physics.enable(player, Phaser.Physics.ARCADE);
	  cursors = game.input.keyboard.createCursorKeys();
	  
	*/
	

    },


    update: function(){
	
	game.player.player.body.velocity.setTo(0, 0);

	this.game.physics.arcade.overlap(game.player.player, this.words, function(player, word) {

		this.game.paper.assignText(word.wordText, word.wordColor, word.wordPoint);

		this.words.forEach(function(w) {

			if (w.wordColor == word.wordColor) {
				w.text.kill();
				w.kill();
			}

		}, this);

		word.text.destroy();
		word.destroy();		

	}, null, this);


	if(cursors.left.isDown)
	{
	    if(!(game.player.player.x < 0)){
		game.player.player.body.velocity.setTo(-500,0);
		
	    }
	}
	
	else if(cursors.right.isDown)
	{
	    if(!(game.player.player.x > w/2))
		game.player.player.body.velocity.x = 500;
	}

	
},
	wordHit: function() {


	},

	spawnWord: function() {

		var word = 	game.paper.getWord();
		var speed = game.rnd.integerInRange(150, 300);
		var rndX = game.rnd.integerInRange(50, game.width/2 - 50);
		var word =this.words.add(new Word(game, rndX, -30, speed,word.word, word.color, word.points));
		word.update = function(){

			if(this.y > game.height){
			this.text.destroy();
			this.destroy();
			}

			this.text.x = Math.floor(this.x + this.width / 2);
    		this.text.y = Math.floor(this.y + this.height / 2);


		};

	}


};
