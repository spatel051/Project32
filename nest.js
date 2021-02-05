class Nest{
    constructor(x, y, r){
        var options = {
            isStatic: true
        }
        this.r = r; // 300
        this.body = Bodies.rectangle(x, y, this.r - 100, this.r - 250, options);
        this.image = loadImage("images/nest.png");
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