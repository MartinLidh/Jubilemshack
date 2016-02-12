var gameState = {

  create: function(){
    //game.add.plugin(Phaser.Plugin.Debug);
    // game.add.plugin(Phaser.Plugin.Inspector);
    //game.add.image(0, 0, 'bg');
    game.add.image(10, 10, 'char');


    game.paper = new Paper(game, 100,100, 1);
    //game.add.plugin(Phaser.Plugin.Debug);
    // game.add.plugin(Phaser.Plugin.Inspector);
    game.add.image(0, 0, 'bg');
    game.add.image(150, 800, 'char');

    game.paper.create();

  },

  update: function(){
    game.paper.update(); 
  }


};
