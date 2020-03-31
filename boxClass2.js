class boxClass2 extends baseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.Visibility = 255;
        if(gameState === "Win" || gameState === "Lose"){
          this.body.isStatic = true;
        }
        }
    

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        if(pos.y < 610){
          push();
          translate(pos.x,pos.y);
          rectMode(CENTER);
          rotate(angle);
          strokeWeight(2);
          fill(207,255,4);
          rect(0,0,this.width,this.height);
          pop();
        }
        else{
            World.remove(world, this.body);
            pos.y = -1000;
            score = score + 10;
            this.body.isStatic = true;
            push();
            this.Visiblity = this.Visiblity - 0.1;
            fill(this.Visiblity);
            pop();
        }
    }
}