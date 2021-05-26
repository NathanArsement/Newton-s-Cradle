class bob{
    
    constructor(x, y, r){
        var opt = {
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:1.0
        }
        this.body = Matter.Bodies.circle(x, y, r, opt);
        this.r = 50;
        
        
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push()
        rotate(angle);
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill("pink");
        stroke("black"); 
        ellipse( 0,0, this.r);
        pop();
    }
};