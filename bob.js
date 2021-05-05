class Bob{
    constructor(x,y){
        var options={
            restitution:1,
            friction:0.3,
            density:0.8
        }
        this.body= Bodies.circle(x,y,30,options)
        
        World.add(world,this.body)
    }

    display()
    {
        fill("yellow")
        ellipse(this.body.position.x,this.body.position.y,50,50)
    }
}