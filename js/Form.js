class Form {
    constructor(){

        this.input = createInput("Nom (Name)");
        this.Button = createButton('Jouer (Play)');
        this.greeting = createElement('h3');
        this.reset = createButton('réinitialiser(Reset)')


}
hide(){
    this.greeting.hide();
    this.Button.hide();
    this.input.hide();
}
display(){
    var title = createElement('h2');
    title.html("Bienvenue à voiture courses Jeu (welocome to car racing game)");
    title.position(130,50);
    
    this.input.position(130,160);
    this.Button.position(250,200);
  
    
    this.Button.mousePressed(()=>{
        this.input.hide();
        this.Button.hide();
        title.hide();
        player.name = this.input.value();
        playerCount = playerCount+1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);

        this.greeting.html("Bonjour(Hello)"+player.name);
        this.greeting.position(250,100);
    });

    
    
}
enddisplay(num){
 
    var endmsg = createElement('h2');
    endmsg.html("Game Over");
    endmsg.position(130,50);

    var endmsg2 = createElement('h2');
    endmsg2.html("YOUR RANK = "+num);
    endmsg2.position(130,250);

    this.reset.position(displayWidth-250, 20);

    this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        player.updateCarAtEnd(0);
    })



}

}