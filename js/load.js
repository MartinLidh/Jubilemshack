var loadState = {

  preload: function() {

    /*
       Load all game assets
       Place your load bar, some messages.
       In this case of loading, only text is placed...
       */


    //Load your images, spritesheets, bitmaps...
    //game.load.image('bg', 'assets/background.jpg');
    //game.load.image('char', 'assets/guy.png');
    game.load.spritesheet('char', 'assets/player.png', 148, 169, 5);

    game.load.image('paper', 'assets/paper.png');
    game.load.image('rect_1', 'assets/redrect.png');
    //Load your sounds, efx, music...
    game.load.audio('bg_sound', 'assets/bensound-buddy.mp3');

    //Load your data, JSON, Querys...
    //Example: game.load.json('version', 'http://phaser.io/version.json');
    game.load.json('cv1', 'data/cv_1.json');
  },

  create: function() {

    game.stage.setBackgroundColor('#4a4a49');
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.state.start('menu');
    game.scale.startFullScreen(true);
    game.music = game.add.audio('bg_sound');
    game.music.loop = true;
  }
};
