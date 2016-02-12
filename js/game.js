var player;
var cursors;
var charScale = 0.4;

var gameState = {


  create: function(){
    //game.add.plugin(Phaser.Plugin.Debug);
    // game.add.plugin(Phaser.Plugin.Inspector);
    //game.add.image(0, 0, 'bg');




      var w = game.width;
      var h = game.height;

      game.paper = new Paper(game, this.game.width/2, 0, 1);
    //game.add.plugin(Phaser.Plugin.Debug);
    //game.add.plugin(Phaser.Plugin.Inspector);
    //game.add.image(0, 0, 'bg');
      player = game.add.sprite(w/4,h-100, 'char');
      player.scale.setTo(charScale,charScale);
      player.anchor.setTo(0.5,0.5);
      game.physics.enable(player, Phaser.Physics.ARCADE);
      cursors = game.input.keyboard.createCursorKeys();
      game.paper.create();
  },


  update: function(){

    player.body.velocity.setTo(0, 0);


    if(cursors.left.isDown)
    {
	
	if(!(player.x < (player.width/2)*charScale)){
	    player.body.velocity.x = -400;
	}
    }

    else if(cursors.right.isDown)
    {
	if(!(player.x > w/2-(player.width/2)*charScale))
	    player.body.velocity.x = 400;
    }
  }



};
