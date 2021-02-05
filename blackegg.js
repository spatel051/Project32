class blackEgg{
    constructor(x, y){
        var options = {
            restitution: 0.3,
            fricition: 0.1
        }
        this.r = 100;
        this.body = Bodies.circle(x, y, 50, options)
        this.image = loadImage("images/blackegg.png");
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