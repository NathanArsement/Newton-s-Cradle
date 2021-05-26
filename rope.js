class rope{
    constructor(body1, body2, x, y){
        this.XX=x;
        this.YY=y;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.XX, y: this.YY}
        }
        
        this.rope= Matter.Constraint.create(options);
        World.add(world, this.rope);
    }

      display(){
          var pointA=this.rope.bodyA.position;
          var pointB=this.rope.bodyB.position;

          strokeWeight(2);
          
          var Anchor1X=pointA.x
          var Anchor1Y=pointA.y

          var Anchor2X=pointB.x+ this.XX
          var Anchor2Y=pointB.y+ this.YY

          line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
      }
          
    
};
