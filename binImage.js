class Binimage{
    constructor(x,y,width,height){
        var options = {
          'density':10,
          'isStatic':true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
         this.image = loadImage("Images/dustbingreen.png");
        World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      this.body.visible = false
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      fill(0);
      //rect(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height)
      pop();
    }
}