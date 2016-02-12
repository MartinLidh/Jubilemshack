String.prototype.splice = function(idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

Paper = function (game, x, y, rotateSpeed) {
  Phaser.Sprite.call(this, game, x, y, 'paper');

  this.wordDelay = 50;
  this.breakLineIndex = 40;

  this.charSize = 12;
  this.words = [];
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

  game.add.image(this.x, this.y, 'paper');
  var text = game.add.text(this.x + 20, this.y + 30, "", this.textStyle);
  var sentence = this.getCurrentSentence();

  var letterIndex = 0;
  var timer = game.time.events.loop(this.wordDelay, function(){
    text.text = sentence.substring(0, letterIndex);
    letterIndex++;
  }, this);

};
Paper.prototype.createWord = function(x, y){
  console.log('X', x, 'Y', y);
  var word = new PaperWord(game, x, y + 30, "#009fe3");
  word.create();
  this.words.push(word);
};

