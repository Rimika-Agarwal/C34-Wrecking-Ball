class Slingshot{
    constructor(body1, point2){
        //JSON - JS Object Notation
        //key: value
        //length: 10
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 200,
            stiffness: 0.5
        }
    
        this.sling = Constraint.create(options)
        this.pointB = point2;
        World.add(world,this.sling)
    }

    display(){
        if(this.sling.bodyA !== null){ //if(this.sling.bodyA){}
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(1);
            //line(x1,y1,x2,y2);
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            pop();
        }
        
    }
}