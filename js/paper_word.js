PaperWord = function(game, x, y, color){
  this.DEFAULT_HEIGHT = 10;
  this.DEFAULT_WIDTH = 100;
  this.color = color;
  this.rect = new Phaser.Rectangle(x, y, this.DEFAULT_WIDTH, this.DEFAULT_HEIGHT);
};

PaperWord.prototype = Object.create(Phaser.Sprite.prototype);
PaperWord.prototype.constructor = PaperWord;

PaperWord.prototype.create = function(){
  //game.add.graphics(this.rect, this.color);  
};

