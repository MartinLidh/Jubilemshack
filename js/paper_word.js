PaperWord = function(game, x, y, color){
  this.color = color; 
  this.textStyle = {
    fill: '#000000',
    font: '13px Courier'
  } 

  Phaser.Sprite.call(this, game, x, y, 'paper');
};

PaperWord.prototype = Object.create(Phaser.Sprite.prototype);
PaperWord.prototype.constructor = PaperWord;

PaperWord.prototype.create = function(){
  var sprite = game.add.image(this.x - 2, this.y-2, 'rect_1');
  var text = game.add.text(this.x + 4, this.y -1, "_____",this.textStyle);
  sprite.scale.setTo(0.2,0.3);
};

