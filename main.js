var GameState = {
  preload: function() {
this.game.physics.startSystem(Phaser.Physics.ARKADE); 
this.cursors = this.game.input.keyboard.createCursorKeys(); 
  },

  init: function() {

  },
  create: function(){
    game.stage.backgroundColor = "#33ffff";
this.blocks = ['green', 'yellow', 'red', 'blue']
this.k = 3;
this.delay = 1000;
this.timer = 0;
this.fire = false;
this.right = 100;
this.left = 100;
  // console.log(Phaser.Keyboard.A)
  //console.log(this.game.input.keyboard)
  this.key = this.input.keyboard.addKey(65);
  },

  update: function() {
    if(this.key.isDown)
      console.log('Fuuuck')
    this.timer++;
    //console.log('правые: ', this.right);
    // console.log('левые: ', this.left);
    // console.log(this.timer)
    // if(this.timer > 100) {
    //   var randNumber = Math.random();
    //   if(randNumber > 0.995 && this.fire === false){
    //     this.fire = true;
    //     this.timer = 0;
    //     this.l = Math.floor(Math.random() * 4);
    //     console.log(this.l)
    //     if (this.l === 0 && this.cursors.up.isDown){
    //       console.log('Правый вин')
    //       this.right += 50;
    //       this.left -= 50;
    //     } else if (this.l === 0 && this.cursors.W.isDown){
    //     console.log('Левый вин')
    //       this.right -= 50;
    //       this.left += 50;
    //   }
    //           if (this.l === 1 && this.cursors.right.isDown){
    //       console.log('Правый вин')
    //       this.right += 50;
    //       this.left -= 50;
    //     } else if (this.l === 1 && this.cursors.D.isDown){
    //     console.log('Левый вин')
    //       this.right -= 50;
    //       this.left += 50;        
    //   }
    //           if (this.l === 2 && this.cursors.left.isDown){
    //       console.log('Правый вин')
    //                 this.right += 50;
    //       this.left -= 50;
    //     } else if (this.l === 2 && this.cursors.A.isDown){
    //     console.log('Левый вин')
    //               this.right -= 50;
    //       this.left += 50;
    //   }
    //           if (this.l === 3 && this.cursors.down.isDown){
    //       console.log('Правый вин')
    //                 this.right += 50;
    //       this.left -= 50;
    //     } else if (this.l === 3 && this.cursors.S.isDown){
    //     console.log('Левый вин')
    //               this.right -= 50;
    //       this.left += 50;
    //   }}
    // }
    },
  };
//initiate the Phaser framework
var game = new Phaser.Game(640, 360, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');