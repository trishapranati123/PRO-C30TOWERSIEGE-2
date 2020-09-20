class block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.8,
          friction:1.0,
          density:1.0	
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility=255;
      World.add(world, this.body);
    }
    display(){          
      //console.log(this.body.speed);
      var pos =this.body.position;      
      if(this.body.speed < 5) {        
        //push();
        //translate(pos.x, pos.y);        
        rectMode(CENTER);          
        rect(pos.x, pos.y, this.width, this.height);
        //pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;
        tint(255,this.visiblity);
        //rectMode(CENTER);  
        //rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
    }
  };