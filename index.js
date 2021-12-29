// Add your Circle class here
class Circle{
  constructor(radius){
    if(radius > 0){
      this.radius = radius;
    }else{
      throw new Error ("Radius cannot be less than 0")
    }
  }

  get diameter(){
    return this.radius + this.radius;
  }

  get circumference(){
    return (Math.PI * (this.radius*2))
  }
  get area(){
    return (Math.PI * (this.radius**2))
  }
  set diameter(diameter){
    if(diameter > 0){

      this.radius = diameter/2
    }else{
      throw new Error ("diameter cannot be less than 0")
    }
  }

  set circumference(circumference){
    if(circumference > 0){
      this.radius = (circumference/Math.PI)/2;
    }else{
      throw new Error("circumference cannot be less than 0")
    }
  }

  set area(area){
    if(area > 0){
      this.radius = Math.sqrt(area/Math.PI)
    }else{
      throw new Error("area cannot be less than 0")
    }
  }
}
