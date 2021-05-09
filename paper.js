class Paper {
    constructor(x,y,r){
        
        this.x=x;
        this.y=y;
        this.r=r;

        var options={
          
            isStatic:false,
            friction:0,
            restitution:0.3,
            density:1.2

        }
      
        this.body=Bodies.circle(x,y,r,options);
        World.add(world, this.body);
        this.image=loadImage("paper.png");

    }
        
         display(){
            
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.r*2,this.r*2);





         }






}