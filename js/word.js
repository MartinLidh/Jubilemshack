

Word = function(game, x, y, speed,text,color) {
    Phaser.Sprite.call(this, game, x, y);
    this.wordText = text;
    this.wordColor = color;
    this.game.physics.arcade.enable(this);
    this.speed = speed || 1;
    this.anchor.setTo(0.5);
    var style = { font: '64px monospace', align: 'center', fill: color, stroke: '#000000', strokeThickness: 3};
    this.text = this.game.add.text(x, y, text, style);
    this.text.scale.setTo(0.5,0.5);
    this.text.anchor.set(0.5);
    this.body.velocity.y = speed;
};

Word.prototype = Object.create(Phaser.Sprite.prototype);
Word.prototype.constructor = Word;

/*Word.prototype.update = function() {

    if (this.y < 0) {
        this.destroy();
    }
   // console.log(this);
    text.x = Math.floor(this.x + this.width / 2);
    text.y = Math.floor(this.y + this.height / 2);

}*/