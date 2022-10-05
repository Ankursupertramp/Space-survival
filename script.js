score = 0;
cross= true ; 

document.onkeydown = function(e){
  console.log("Key code is: ", e.keyCode)
  if(e.keyCode ==38){
    ship = document.querySelector('.ship');
    ship.classList.add('animateShip');
    setTimeout(() => {
      ship.classList.remove('animateShip')
    },700)

  }
  if(e.keyCode ==32){
      ship = document.querySelector('.ship');
      ship.classList.add('animateShip');
      setTimeout(() => {
        ship.classList.remove('animateShip')
      },700)
    }

      if(e.keyCode ==87){
        ship = document.querySelector('.ship');
        ship.classList.add('animateShip');
        setTimeout(() => {
          ship.classList.remove('animateShip')
        },700)
  
      }
    
  if(e.keyCode==39){
    ship = document.querySelector('.ship');
    shipX = parseInt(window.getComputedStyle(ship,null).getPropertyValue('left'));
    ship.style.left = shipX +112 +"px"
  }
  if(e.keyCode==68){
    ship = document.querySelector('.ship');
    shipX = parseInt(window.getComputedStyle(ship,null).getPropertyValue('left'));
    ship.style.left = shipX +112 +"px"
  }
  if(e.keyCode==37){
    ship = document.querySelector('.ship');
    shipX = parseInt(window.getComputedStyle(ship,null).getPropertyValue('left'));
    ship.style.left = (shipX - 112) +"px"
  }
  if(e.keyCode==65){
    ship = document.querySelector('.ship');
    shipX = parseInt(window.getComputedStyle(ship,null).getPropertyValue('left'));
    ship.style.left = (shipX - 112) +"px"
  }
}
setInterval(() =>{
  ship = document.querySelector('.ship');
  gameOver = document.querySelector('.gameOver');
  obstacle = document.querySelector('.obstacle');
  dx = parseInt(window.getComputedStyle(ship , null).getPropertyValue('left'));
  dy = parseInt(window.getComputedStyle(ship , null).getPropertyValue('top'));
  ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
  oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
  offsetX = Math.abs(dx-ox);
  offsetY = Math.abs(dy-oy);
  if(offsetX<80 && offsetY<70){
     gameOver.style.visibility ='visible';
    obstacle.classList.remove('obstacleAni')
  }else if(offsetX < 145 && cross){
    score+=1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
       cross = true;
    }, 1000);
    setTimeout(() => {
      aniDur =  parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
       newDur = aniDur - 0.025;
       obstacle.style.animationDuration = newDur + 's';
    },500);
  }
},100)

function updateScore(score){
  scoreCount.innerHTML = "Your Score: "+ score

}