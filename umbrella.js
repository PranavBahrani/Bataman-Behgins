class Umbrella {
    constructor(x,y,r){
       var options = {
            isStatic: true,
        }
       this.radius = 10;
       this.image = loadImage("Images/walking_1.png");
       this.body = Bodies.circle(x,y,10,options);
       World.add(world,this.body)
        
     } 
     display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,300,300);  
      
     }
}