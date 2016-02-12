Paper = function (game, x, y, rotateSpeed) {
  Phaser.Sprite.call(this, game, x, y, 'paper');

  this.wordDelay = 50;
  
  this.currentSentence = 0;
  this.sentences = game.cache.getJSON('cv1');
  this.textStyle = {
    fill: '#000000',
    font: '12px Courier'
  } 
};

Paper.prototype = Object.create(Phaser.Sprite.prototype);
Paper.prototype.constructor = Paper;

Paper.prototype.getCurrentSentence = function(){
  return this.sentences.sentences[this.currentSentence].sentence;
};

Paper.prototype.create = function(){

  var text = game.add.text(this.x, this.y + 30, "", this.textStyle);
  var sentence = this.getCurrentSentence();
  
  var letterIndex = 0;
  game.time.events.loop(this.wordDelay, function(){
    letterIndex++;
    text.text = sentence.substring(0, letterIndex);
    if(letterIndex >= sentence.length) return;
//    console.log('test');
  }, this);

  game.add.image(this.x, this.y, 'paper');
};

