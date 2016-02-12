Player = function (game, x, y,charScale){
    Phaser.Sprite.call(this, game, x, y, 'char');

   
}
Player.prototype.create = function(){

    player = game.add.sprite(this.x   ,this.y, 'char');
    player.scale.setTo(charScale,charScale);
    player.anchor.setTo(0.5,0.5);

}

Player.prototype.update = function(cursors){

    game.player.body.velocity.setTo(0, 0);
    if(cursors.left.isDown)
    {
	
	if(!(game.player.x < (player.width/2)*charScale)){
	    game.player.body.velocity.x = -400;
	}
    }
    
    else if(cursors.right.isDown)
    {
	if(!(game.player.x > w/2-(player.width/2)*charScale))
	    game.player.body.velocity.x = 400;
    }
}

