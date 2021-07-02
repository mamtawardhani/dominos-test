class Mover{
    constructor(x,y){
        var options={
            restitution: 1,
            friction:2,
            density:0.5
        }

        this.body = Bodies.circle(x,y,30, options)
        this.height = height
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        pos.x = mouseX
        pos.y=mouseY
        push()
        translate(pos.x, pos.y)
        rotate(angle*180/PI)
        fill("purple")
        ellipseMode(CENTER)
        ellipse(0,0,30,30)
        pop()
    }
}