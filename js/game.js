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
	game.player = new Player(game);
	this.spawnWord();

	this.game.time.events.loop(5000, function() {
		this.spawnWord();
	}, this);
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
	game.paper.create();
	game.player.create();
    },


    update: function(){
	
	game.player.player.body.velocity.setTo(0, 0);

	this.game.physics.arcade.overlap(this.words, game.player.player, function(word, player) {
			console.log("KROCKHORA");

		if (!word.taken) {
			word.taken = true;
		} 

	}, null, this);


	if(cursors.left.isDown)
	{
	    if(!(game.player.player.x < 0)){
		game.player.player.body.velocity.setTo(-400,0);
		
	    }
	}
	
	else if(cursors.right.isDown)
	{
	    if(!(game.player.player.x > w/2))
		game.player.player.body.velocity.x = 400;
	}

	
},

	spawnWord: function() {

		var text = "Test";
		var color = "#00ee33";
		var speed = 100;
	

		var word =this.words.add(new Word(game, 10, 10, speed));
		word.update = function(){
			this.text.x = Math.floor(this.x + this.width / 2);
    		this.text.y = Math.floor(this.y + this.height / 2);

		};

	}


};
