class Log extends baseClass{

    constructor(x, y, height, angle){

        super(x,y,20,height,angle);

        this.image = loadImage("Sprites/log.png")

        Matter.Body.setAngle(this.body, angle);


    }





}