class Rock{
    constructor(x, y){
        var options = {
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.r = 50;
        this.body = Bodies.circle(x, y, 50, options);
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}