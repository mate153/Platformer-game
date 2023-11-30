import React, { useEffect } from 'react';
import './style/Game.css';

function Game() {
  
  useEffect(() => {
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');
    const gravity = 0.5;

    canvas.width = 1024;
    canvas.height = 576;

    class Player {
      constructor(position){
        this.position = position;
        this.velocity = {
          x: 0,
          y: 1,
        };
        this.height = 100;
      };

      draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 100, this.height);
      };

      update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if(this.position.y + this.height + this.velocity.y < canvas.height){
          this.velocity.y += gravity;
        }else {
          this.velocity.y = 0;
        };        
      };
    };

    const player = new Player({
      x: 0,
      y: 0,
    });

    const player2 = new Player({
      x: 400,
      y: 100,
    });

    const keys = {
      d: {
        pressed: false,
      },
      s: {
        pressed: false,
      },
      a: {
        pressed: false,
      },
      w: {
        pressed: false,
      }
    };

    function animate(){
      window.requestAnimationFrame(animate);

      c.fillStyle = 'white';
      c.fillRect(0, 0, canvas.width, canvas.height);

      player.update();
      player2.update();
      
      player.velocity.x = 0;

      if(keys.d.pressed){
        player.velocity.x = 2;
      } else if(keys.a.pressed){
        player.velocity.x = -2;
      }
    };
    animate();


    window.addEventListener('keydown', (event) => {
      switch(event.key){
        case 'd': 
          keys.d.pressed = true;
          break;
        
        case 'a':
          keys.a.pressed = true;
          break;

        case 's':
          keys.s.pressed = true;
          break;

        case 'w':
          keys.w.pressed = true;
          player.velocity.y = -15;
          break;
      }        
    });

    window.addEventListener('keyup', (event) => {
      switch(event.key){
        case 'd': 
          keys.d.pressed = false;
          break;
        
        case 'a':
          keys.a.pressed = false;
          break;
      }        
    });

  }, []);


  return (    
    <div>
      <p>Game</p>
      <canvas></canvas>
    </div>    
  )
}
  
export default Game;