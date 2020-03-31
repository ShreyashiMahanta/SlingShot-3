class Bird{
	constructor(x,y,radius){
		var choose = random(1,2);
		if(choose > 1.5){
			var density = 1;
		}
		else{
			var density = 0.001;
		}
		var options = {
			density: density
		}
		this.body = Bodies.circle(x,y,radius,options);
		this.radius = radius;
		World.add(world, this.body);
	}

	display(){
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		fill(57,255,20);
		ellipseMode(RADIUS);
		circle(0, 0, this.radius); 
		pop();
	}
}