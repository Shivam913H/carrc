var canvas,bgImage;
var gameState = 0;
var playerCount=0;
var database;
var form,player,game;
var allplayers;
var car1,car2,car3,car4;
var cars;
var car1image,car2image,car3image,car4image,trackimage,groundimage;
var playerrank;

function preload(){

car1image = loadImage("images/car1.png");
car2image = loadImage("images/car2.png");
car3image = loadImage("images/car3.png");
car4image = loadImage("images/car4.png");
trackimage = loadImage("images/track.jpg");
groundimage = loadImage("images/ground.png");

}





function setup(){
  database = firebase.database();
  //console.log(database);
  createCanvas(displayWidth - 12,displayHeight - 139);
game = new Game();
game.getState();
game.start();

 
}

function draw(){
  background("white");
  
  if(playerCount === 4){
    game.update(1);

  }
  if(gameState === 1){

    clear();
    game.play();
    
  }
    if (gameState === 2){
      game.end();
    }
}
