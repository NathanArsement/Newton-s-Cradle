class rooof{
    constructor(x, y, w, h) {
        var options = {
            'isStatic':true,
        }
        this.body = Bodies.rectangle(x,y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red"); 
        rect(0, 0, this.width, this.height);
        pop();
      }
}