var postGameState= {

    create: function(){
    this.clbg = game.add.sprite(game.width/4, game.height/2, 'paper');
    this.hsbg = game.add.sprite(game.width*0.75, game.height/2, 'paper');
    this.clbg.anchor.setTo(0.5,0.5);
    this.hsbg.anchor.setTo(0.5,0.5);
    
    var style = { font: '24px monospace', align: 'center', fill: "#4a4a49", stroke: '#000000', strokeThickness: 2};
    
    this.text1 = this.game.add.text(this.bg.x, this.bg.y*1.8, "Press B to Back", style);
    this.text1.anchor.setTo(0.5,0.5);

    this.text2 = this.game.add.text(this.bg.x, this.bg.y/4, "High Score", style);
    this.text2.anchor.setTo(0.5,0.5);
       
    var b = game.input.keyboard.addKey(Phaser.Keyboard.B)
    b.onDown.add(postGameState.menuState,this);



},

	menuState: function(){
		game.state.start('menu');

	},

};