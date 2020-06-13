class Wood extends baseClass {

    constructor(x,y,height,angle){

        super(x,y,20,height,angle);
        this.image = loadImage("sprites/wood.png");
        Matter.body.setAngle(this.body, angle);
    }

}