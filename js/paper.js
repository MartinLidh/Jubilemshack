String.prototype.splice = function(idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

Paper = function (game, x, y, rotateSpeed) {
  Phaser.Sprite.call(this, game, x, y, 'paper');

  this.wordDelay = 50;
  this.breakLineIndex = 40;
  this.charSize = 12;
  this.words = [];
  this.resetColours();
  this.currentSentence = -1;
  this.sentences = game.cache.getJSON('cv1');
  this.textStyle = {
    fill: '#000000',
    font: '12px Courier'
  } 

  this.texts = [];
};

Paper.prototype = Object.create(Phaser.Sprite.prototype);
Paper.prototype.constructor = Paper;

Paper.prototype.resetColours = function(){
  this.wordColours = ['blue', 'pink', 'red', 'yellow']
}
Paper.prototype.getCurrentSentence = function(){
  return this.sentences.sentences[this.currentSentence].sentence;
};

Paper.prototype.getCurrentText = function(){
  return this.texts[this.currentSentence];
};

Paper.prototype.create = function(){
  game.add.image(this.x, this.y, 'paper');
  this.triggerNextWord();
};

Paper.prototype.triggerNextWord = function(){
  this.resetColours();
  this.currentSentence++;
  console.log(this.currentSentence);
  var text = game.add.text(Math.floor(this.x + 20), Math.floor((this.y + 30) + (100 * this.currentSentence)), "", this.textStyle);
  this.texts.push(text);
  var sentence = this.getCurrentSentence();
  sentence = sentence.replace(/(#{\d})/g, "██████████");
  var letterIndex = 0;
  var minusNewline = 0;
  var wordCount = -1;
  game.time.events.start();
  var timer = game.time.events.loop(this.wordDelay, function(){
    if(sentence[letterIndex] === "\n"){
      minusNewline++;
    }
    if(sentence[letterIndex] === "█"){
      if(sentence[letterIndex - 1] !== "█"){
        wordCount++;
        this.words.push(letterIndex);
      }
      text.addColor(this.wordColours[wordCount], letterIndex - minusNewline);
    }else{
      text.addColor("#000000", letterIndex - minusNewline);
    }
    text.text = sentence.substring(0, letterIndex);
    letterIndex++;
    if(letterIndex >= sentence.length){
      game.time.events.remove(this.timer);

    }
  }, this);

};
/*      var v = this.getWord();
      console.log(v);
      this.assignText(v.word, v.color);
      v = this.getWord();
      this.assignText(v.word, v.color);
      v = this.getWord();
      this.assignText(v.word, v.color);
      v = this.getWord();
      this.assignText(v.word, v.color);*/
Paper.prototype.getWordFromColor = function(color){
  allWordColours = ['blue', 'pink', 'red', 'yellow'];
  var cIndex = allWordColours.indexOf(color);
  console.log(this.currentSentence);
  var words = this.sentences.sentences[this.currentSentence].words[cIndex];
  var r = Math.floor(Math.random() * words.length);
  return words[r];
};

Paper.prototype.getWord = function(){
  var randomColorIndex = Math.floor(Math.random() * this.wordColours.length);
  var color = this.wordColours[randomColorIndex];
  var w = this.getWordFromColor(color);
  w.color = color;
  return w;
};

Paper.prototype.assignText = function(input, color){
  var index = this.wordColours.indexOf(color);
  var wordIndex = this.words[index];

  var text = this.getCurrentText();

  text.text = text.text.splice(wordIndex, 10, ""); 
  text.text = text.text.splice(wordIndex, 0, input);

  this.wordColours.splice(this.wordColours.indexOf(color), 1);
  this.words.splice(this.words.indexOf(index),1);

  var minusNewline = 0;
  var wordCount = -1;
  for(var i = 0; i < text.text.length; i++){
    if(text.text[i] === "\n"){
      minusNewline++;
    }
    if(text.text[i] === "█"){
      if(text.text[i - 1] !== "█"){
        wordCount++;
        this.words[wordCount] = i;
      }
      text.addColor(this.wordColours[wordCount], i - minusNewline);
    }else{
      text.addColor("#000000", i - minusNewline);
    }
    text.addColor("#000000", wordIndex + i);


  } 
  if(wordCount === -1){
    console.log(text.text);
    console.log("trigger!");
    this.triggerNextWord();
  }

}


Paper.prototype.createWord = function(x, y){
  var word = new PaperWord(game, x, y + 30, "#009fe3");
  word.create();
  this.words.push(word);
};
