var player;
var cursors;
var w = game.width;
var h = game.height;
var gameState = {
     

  create: function(){

    //game.paper = new Paper(game, 100,600, 1);
    //game.add.plugin(Phaser.Plugin.Debug);
    //game.add.plugin(Phaser.Plugin.Inspector);
    //game.add.image(0, 0, 'bg');
      player = game.add.sprite(10,10, 'char');
      player.scale.setTo(0.4,0.4);
      game.physics.enable(player, Phaser.Physics.ARCADE);
      cursors = game.input.keyboard.createCursorKeys();
      //game.paper.create();

  },

  update: function(){
   // game.paper.update(); 
  

	player.body.velocity.setTo(0, 0);
	

	if(cursors.left.isDown)
	{
	    player.body.velocity.x = -400;
	}

	else if(cursors.right.isDown)
	{
	    player.body.velocity.x = 400;
	}
    }
    


};
