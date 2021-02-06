class Monster {

    constructor(x, y, radius){

        var options = {

         // 'isStatic'  : true,
          'density' : 1.0,
          'firctionAir' : 1.0
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("images/Monster-01.png");
        this.visiblity = 255;

        World.add(world, this.body);

      }

    display(){

      if(this.body.speed < 10){

        var angle = this.body.angle;  

        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);

        imageMode(CENTER);
        image(this.image, 0, 0, 250, 200);

        pop();

    }else{

          World.remove(world, this.body);

          push();
          this.visiblity = this.visiblity - 5;
          tint(255,this.visiblity);
          
          pop();
        }

    }

  }    