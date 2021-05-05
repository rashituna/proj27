class Rope{
    constructor(bodyA,bodyB,xOffset){
        var options={
           bodyA:bodyA,
           bodyB:bodyB,
           pointB: {x:xOffset,y:0}
        }
        this.rope= Constraint.create(options)
        this.xOffset= xOffset
        World.add(world,this.rope)
    }

    display()
    {
        strokeWeight(2)
        stroke("black")
        var pointA= this.rope.bodyA.position
        var pointB= this.rope.bodyB.position
        line(pointA.x,pointA.y,pointB.x+ this.xOffset,pointB.y)
    }
}