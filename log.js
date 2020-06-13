class Log extends baseClass{

    constructor(x, y, height, anlge){

        super(x,y,20,height,angle);

        this.image = loadImage("Sprites/log.png")

        Matter.setAngle(this.body, angle);


    }





}