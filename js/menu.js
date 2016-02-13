var menuState = {

    create: function(){

        //game.add.plugin(Phaser.Plugin.Debug);
        //game.add.image(0, 0, 'bg');
	//game.add.image(150, 800, 'char');
       // game.add.plugin(Phaser.Plugin.Inspector);
    var style = { font: '30px monospace', align: 'center', fill: "#009fe3", stroke: '#000000', strokeThickness: 3};
    
    this.text1 = this.game.add.text(game.width/2, 200, "Press N to start game", style);
    this.text1.anchor.setTo(0.5,0.5);

    /*this.text2 = this.game.add.text(game.width/2, 300, "Press H to view highscore", style);
    this.text2.anchor.setTo(0.5,0.5);*/

    var n = game.input.keyboard.addKey(Phaser.Keyboard.N)
    n.onDown.add(menuState.startGame,this);

    /*var h = game.input.keyboard.addKey(Phaser.Keyboard.H)
    h.onDown.add(menuState.highScore,this);*/
    

},

	startGame: function(){
		game.state.start('game');

	},
	highScore: function(){
		game.state.start('highscore');

	},



};
