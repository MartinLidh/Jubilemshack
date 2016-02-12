var player;
var cursors;
var gameState = {


  create: function(){
    //game.add.plugin(Phaser.Plugin.Debug);
    // game.add.plugin(Phaser.Plugin.Inspector);
    //game.add.image(0, 0, 'bg');


    player = game.add.sprite(10, 10, 'char');
    game.physics.enable(player,Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();




    create: function(){



      game.paper = new Paper(game, game.width/2, 10, 1);
      //game.add.plugin(Phaser.Plugin.Debug);
      // game.add.plugin(Phaser.Plugin.Inspector);
      //game.add.image(0, 0, 'bg');
      game.add.image(150, 800, 'char');

      game.paper.create();

    },

    update: function(){
      game.paper.update(); 
    }

    player.body.velocity.setTo(0, 0);


    if(cursors.left.isDown)
    {
      player.body.velocity.x = -400;
    }

    else if(cursors.right.isDown)
    {
      player.body.velocity.x = 400;
    }
  }



};
