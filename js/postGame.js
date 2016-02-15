
var postGameState= { create: function(){

   // this.clbg = game.add.sprite(game.width/5, game.height/2, 'paper');
    this.hsbg = game.add.sprite(game.width*0.8, game.height/2, 'paper');
   // this.clbg.anchor.setTo(0.5,0.5);
    this.hsbg.anchor.setTo(0.5,0.5);

    var style = { font: '36px monospace', align: 'center', fill: "#009fe3", stroke: '#000', strokeThickness: 3};
    
    this.hstext = this.game.add.text(this.hsbg.x, this.hsbg.y/4, "High Score", style);
    this.hstext.anchor.setTo(0.5,0.5);

    //this.cltext = this.game.add.text(this.clbg.x, this.clbg.y/4, "Personligt Brev", style);
    //this.cltext.anchor.setTo(0.5,0.5);       
    /*this.readtext = this.game.add.text(game.width/2, 20, , style);

    this.cltext = this.game.add.text(this.clbg.x, this.clbg.y/4, "Personligt Brev", style);
    this.cltext.anchor.setTo(0.5,0.5);
      
   this.letter_text = this.game.add.text(this.clbg.x + 40, this.clbg.y - 200, game.last_text, {font: "12px Courier", fill: "#000000#"}); 
    
    this.letter_text.anchor.setTo(0.5,0);
    this.readtext = this.game.add.text(game.width/2, 20, game.end_s, style);

    this.readtext.anchor.setTo(0.5,0.5);

    this.fbtext = this.game.add.text(game.width/2, 40, "F: Dela på Facebook", style);
    this.fbtext.anchor.setTo(0.5,0.5);

    this.twitext = this.game.add.text(game.width/2, 60, "T: Dela på twitter", style);
    this.twitext.anchor.setTo(0.5,0.5);

    this.newtext = this.game.add.text(game.width/2, 80, "N: Nytt spel", style);
    this.newtext.anchor.setTo(0.5,0.5);*/

    this.backtext = this.game.add.text(game.width/4, game.height/4, "N: Nytt spel", style);
    this.backtext.anchor.setTo(0.5,0.5);

    this.backtext = this.game.add.text(game.width/4, game.height/3, "M: Huvudmeny", style);
    this.backtext.anchor.setTo(0.5,0.5);

    /*var l = game.input.keyboard.addKey(Phaser.Keyboard.L)
    l.onDown.add(postGameState.menuState,this);

    var f = game.input.keyboard.addKey(Phaser.Keyboard.F)
    f.onDown.add(postGameState.menuState,this);

    var t = game.input.keyboard.addKey(Phaser.Keyboard.T)
    t.onDown.add(postGameState.menuState,this);*/

    var n = game.input.keyboard.addKey(Phaser.Keyboard.N)
    n.onDown.add(postGameState.newGame,this);

    var m = game.input.keyboard.addKey(Phaser.Keyboard.M)
    m.onDown.add(postGameState.menuState,this);

    this.saveScore();
    game.highscores.sort(this.highScoresSort);
    this.printScores();
},

    saveScore: function(){
        var score =  ["Player 1: ", game.s];
        game.highscores.push(score);
    },

    printScores: function(){      
        var style = { font: '24px monospace', align: 'center', fill: "#009fe3", stroke: '#000', strokeThickness: 3};
        var highestScore;
        game.highscores.reverse();

        for(var s in game.highscores){
        var scoreText = game.highscores[s][0];
        scoreText = scoreText.concat(game.highscores[s][1])
        this.hstext = this.game.add.text(this.hsbg.x, this.hsbg.y/2+s*20, scoreText, style);
        this.hstext.anchor.setTo(0.5,0.5);
        }
    },

    highScoresSort: function(a, b){
        return a[0].localeCompare(b[0]);
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
