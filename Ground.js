class Ground {
    constructor(x,y,width,height) {
      var options = {
                       'isStatic': true,
                       'density': 2,
                       'restitution': 0,
                       'friction': 1
                    }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display()
    {
      /*push();
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      pop();*/

      var pos = this.body.position;
      //var angle = this.body.angle;
      
      push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      stroke(4);
      fill("white");
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
