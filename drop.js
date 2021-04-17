class Drop{
	  constructor(x,y,r){
          var options={
		friction:0.1,
		isStatic:false
	}
       this.radius = 10
       this.body=Bodies.circle(x, y,10,options)
	 World.add(world, this.body);
      }
      showdrops(){
	fill("blue")		
       ellipseMode(RADIUS)
       ellipse(this.body.position.x,this.body.position.y, this.radius)
	}

     update(){
            if(this.body.position.y>height){
			Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
		}
	  }

}