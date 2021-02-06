class Fly{

    constructor(bodyA, pointB){

        var options = {

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 2.0,
            length: 250
        }

        this.pointB = pointB
        this.fly = Constraint.create(options);

        World.add(world, this.fly);
    }

    attach(body){

        this.fly.bodyA= body;
    }

    display(){

        if(this.fly.bodyA){

            var pointA = this.fly.bodyA.position;
            var pointB = this.pointB;

            push();
            
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           
            pop();
        }
    }
    
}