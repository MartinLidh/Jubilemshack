var postGameState= {

    create: function(){
    this.clbg = game.add.sprite(game.width/5, game.height/2, 'paper');
    this.hsbg = game.add.sprite(game.width*0.8, game.height/2, 'paper');
    this.clbg.anchor.setTo(0.5,0.5);
    this.hsbg.anchor.setTo(0.5,0.5);

    var style = { font: '24px monospace', align: 'center', fill: "#4a4a49", stroke: '#009fe3', strokeThickness: 2};
    
    this.hstext = this.game.add.text(this.hsbg.x, this.hsbg.y/4, "High Score", style);
    this.hstext.anchor.setTo(0.5,0.5);

    this.cltext = this.game.add.text(this.clbg.x, this.clbg.y/4, "Personligt Brev", style);
    this.cltext.anchor.setTo(0.5,0.5);
       
    
    this.readtext = this.game.add.text(game.width/2, 20, game.width, style);
    this.readtext.anchor.setTo(0.5,0.5);

    this.fbtext = this.game.add.text(game.width/2, 40, "F: Dela på Facebook", style);
    this.fbtext.anchor.setTo(0.5,0.5);

    this.twitext = this.game.add.text(game.width/2, 60, "T: Dela på twitter", style);
    this.twitext.anchor.setTo(0.5,0.5);

    this.newtext = this.game.add.text(game.width/2, 80, "N: Nytt spel", style);
    this.newtext.anchor.setTo(0.5,0.5);

    this.backtext = this.game.add.text(game.width/2, 100, "M: Huvud Meny", style);
    this.backtext.anchor.setTo(0.5,0.5);

    var l = game.input.keyboard.addKey(Phaser.Keyboard.L)
    l.onDown.add(postGameState.menuState,this);

    var f = game.input.keyboard.addKey(Phaser.Keyboard.F)
    f.onDown.add(postGameState.menuState,this);

    var t = game.input.keyboard.addKey(Phaser.Keyboard.T)
    t.onDown.add(postGameState.menuState,this);

    var n = game.input.keyboard.addKey(Phaser.Keyboard.N)
    n.onDown.add(postGameState.menuState,this);

    var m = game.input.keyboard.addKey(Phaser.Keyboard.M)
    m.onDown.add(postGameState.menuState,this);

},

	readLetter: function(){

	},
    faceBook: function(){

    },
    twitter: function(){
       

    },
    newGame: function(){
        game.state.start('game');

    },
    menuState: function(){
        game.state.start('menu');

    },

};