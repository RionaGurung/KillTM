class Hero {

    constructor(x, y, radius){

        var options = {

          'isStatic' : true,  
          'density' : 1.0,
          'firctionAir' : 1.0
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("images/Superhero-01.png");

        World.add(world, this.body);

      }

      display(){

        var angle = this.body.angle;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);

        imageMode(CENTER);
        image(this.image, 0, 0, 250, 150);

        pop();
      }
    }
