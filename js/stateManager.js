var w = 640,
    h = 480;


//For Fullscreen put this code:

var w = window.innerWidth * 1,//window.devicePixelRatio,
    h = window.innerHeight * 1;//window.devicePixelRatio;


var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('highscore', highScoreState);
game.state.add('postgame', postGameState);
game.state.add('game', gameState);

game.state.start('boot');
