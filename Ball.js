class Ball{
    constructor(x,y){
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.circle(x,y,50,options)
        this.radius = 50;
        World.add(world, this.body)
    }

    display(){
        push();
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
}