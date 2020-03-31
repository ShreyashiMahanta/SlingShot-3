class baseClass{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill(255);
        stroke(255);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}