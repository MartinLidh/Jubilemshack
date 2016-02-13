var loadState = {

  preload: function() {

    game.load.spritesheet('char', 'assets/player.png', 148, 169, 5);

    game.load.image('paper', 'assets/paper.png');
    game.load.image('rect_1', 'assets/redrect.png');
   
    game.load.audio('bg_sound', 'assets/bensound-buddy.mp3');

    game.load.json('cv1', 'data/cv_1.json');
  },

  create: function() {

    game.stage.setBackgroundColor('#4a4a49');
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.state.start('menu');
    game.scale.startFullScreen(true);
    game.music = game.add.audio('bg_sound');
    game.music.loop = true;
    game.highscores = [];

    
  }
};
