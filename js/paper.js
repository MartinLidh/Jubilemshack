Paper = function (game, x, y, rotateSpeed) {

    Phaser.Sprite.call(this, game, x, y, 'paper');

};

Paper.prototype = Object.create(Phaser.Sprite.prototype);
Paper.prototype.constructor = Paper;

Paper.prototype.preload = function(){
}

Paper.prototype.create = function(){
  game.add.image(0,0, 'paper');
}
Paper.prototype.update = function(){
  
}
