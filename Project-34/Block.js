class Block {

    constructor(x, y, width, height) {

      var options = {
        
        //'isStatic' : true,
        'restitution':0.01,
        'friction':1.0,
        'density':1.0
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visiblity = 255;
    
      World.add(world, this.body);

      }

      display(){

       if(this.body.speed < 5){

        var angle = this.body.angle;  

        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);

        rectMode(CENTER);
        fill("#FF0000");
        stroke("black");
        strokeWeight(2);
        rect(0, 0, this.width, this.height);

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
    
