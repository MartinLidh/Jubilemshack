

Word = function(game, x, y, speed,text,color, point) {
    Phaser.Sprite.call(this, game, x, y);
    this.wordText = text;
    this.wordColor = color;
    this.wordPoint = point;
    this.game.physics.arcade.enable(this);
    this.speed = speed || 1;
    this.anchor.setTo(0.5);
    this.tweenX = null;
    var style = { font: '30px monospace', align: 'center', fill: color, stroke: '#000000', strokeThickness: 3};
    this.text = this.game.add.text(x, y, text, style);
    this.text.scale.setTo(0.5,0.5);
    this.text.anchor.set(0.5);
    this.body.velocity.y = speed;
    //this.tweenX(0);
};

Word.prototype = Object.create(Phaser.Sprite.prototype);
Word.prototype.constructor = Word;

/*Word.prototype.tweenX = function(value){

    this.tweenX = this.game.add.tween(this.x);
    this.tweenX.to({this.x: value}, 1000);
    this.tweenX.start();

}*/
