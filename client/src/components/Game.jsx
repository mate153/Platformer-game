import React, { useEffect } from 'react';
import './style/Game.css';

function Game() {
  
  useEffect(() => {
    // CANVAS
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    const scaledCanvas = {
      width: canvas.width / 4,
      height: canvas.height / 4
    };

    canvas.width = 1024;
    canvas.height = 576;

    // ENVIRONMENT PHYSICS
    const gravity = 0.5;

    // PLAYER MOVEMENT KEYS
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

    // PLAYER OBJECT
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

    // Sprite 
    class Sprite {
      constructor({position, imageSrc}){
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
    
        this.image.onload = () => {
          console.log(`Image loaded: ${imageSrc}`);
        };
    
        this.image.onerror = (error) => {
          console.error(`Error loading image ${imageSrc}:`, error);
        };
      }
    
      draw(){
        if(!this.image) return 
        c.drawImage(this.image, this.position.x, this.position.y);
      }
    
      update(){
        this.draw();
      }
    }

    // PLAYERS SPRITE
    const player = new Player({
      x: 0,
      y: 0,
    });

    const player2 = new Player({
      x: 400,
      y: 100,
    });

    // BACKGROUND SPRITE
    const background = new Sprite ({
      position: {
        x:0,
        y:0,
      },
      imageSrc: '/img/game_background_level1/background.png',
    });

    // FRAMES ANIMATION
    function animate(){
      window.requestAnimationFrame(animate);

      c.fillStyle = 'white';
      c.fillRect(0, 0, canvas.width, canvas.height);

      c.save();
      //c.scale(4,4);
      c.translate(0, -background.image.height + canvas.height);
      background.update();
      c.restore();
      
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

    // PLAYER MOVEMENT 
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

        case ' ':
          keys.w.pressed = true;
          player.velocity.y = -15;
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