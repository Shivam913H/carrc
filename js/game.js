/*this class is for game State,gamestart,gameplay and game display functions*/
class Game{

    constructor(){




    }
getState(){
    var gameteStateref = database.ref('gameState');
    gameteStateref.on("value",function(data){
        gameState = data.val();
    })
}
update(state){

database.ref('/').update({
    gameState:state
})



}


async start(){

if(gameState === 0){

    player = new Player();
    var playercountref = await database.ref('playerCount').once("value");
    if(playercountref.exists()){
    playerCount = playercountref.val();
    player.getCount();
    }
form = new Form();
form.display();

}
car1 = createSprite(100,500);
car1.addImage("car1",car1image);
car2 = createSprite(300,500);
car2.addImage("car2",car2image);
car3 = createSprite(500,500);
car3.addImage("car3",car3image);
car4 = createSprite(700,500);
car4.addImage("car4",car4image)
cars = [car1,car2,car3,car4]

}
play(){
    
    form.hide();
    //textSize(30);
    //text("Début du jeu(Game Start)",120,100);
    Player.getPlayerInfo();
    player.getCarAtEnd();

    if(allplayers !== undefined){

        background(groundimage);
        image(trackimage,0,-displayHeight*4, displayWidth, displayHeight*5);

        /*var display_position = 130;
        for (var plr in allPlayers){
            if(plr === "player"+player.index){
            fill("red")
            }
            else
        {fill("black")}

        display_position = display_position + 20;
        textSize(20);
        text(allPlayer[plr].name+"  :  "+allPlayers[plr].distance,120,display_position)
        }*/
        var index = 0;

           var x = 200; 
           var y;

        for (var plr in allplayers){
            index = index + 1;

            x = x + 200;
           

            y = displayHeight - allplayers[plr].distance;

            cars[index-1].x = x;
            cars[index-1].y = y;
  

            if(index === player.index){
                stroke(10);
                fill("red");
                ellipse(x,y,100,100);
                cars[index-1].shapeColor ="red";
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y;
                
            }
        }
    }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance +10;
            player.update();
        }
        
        drawSprites();

        if(player.distance > 4180){

        gameState = 2;
        player.rank +=1;
        player.updateCarAtEnd(player.rank);
        playerrank = player.rank;
        text("Your Rank  :"+player.rank,displayWidth/2-50,y-120);

        }     
    
}
end(){
 console.log("Game Ended");
    form.enddisplay(playerrank);

 
}




}








