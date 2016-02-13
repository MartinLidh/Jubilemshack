Player = function (game){
    
    // Phaser.Sprite.call(this, game, game.width/4, game.height-50, 'char');
    
    this.player = game.add.sprite(game.width/4, game.height-50, 'char');
    game.physics.arcade.enable(this.player);
    
    this.player.scale.setTo(0.4,0.4);
    this.player.anchor.setTo(0.5,0.5);

    this.xPos = this.player.x;
    this.playerTweenX = null;

}


Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;


Player.prototype.create = function(){

}

//Player.prototype.update = function() {
  /*  player.body.velocity.setTo(0, 0);
    
    
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
    }*/
    
    
//};
    

