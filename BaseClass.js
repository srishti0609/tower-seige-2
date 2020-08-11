class BaseClass {
    constructor(x, y, width, height) {
      var options = {
        
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
     
      push();
      
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
      
    }
  }
  
      
    
  
    
    