class Sling{


    constructor(a,b){

        var options = {

            bodyA:a,
            pointB:b,
            stiffness:0.04,
            length:10
        }

        this.sling1 = loadImage("Sprites/sling1.png");
        this.sling2 = loadImage("Sprites/sling2.png");
        this.sling3 = loadImage("Sprites/sling3.png");
        this.pointB = b;
        this.bodyA = a;
        this.slingMain = Constraint.create(options);

        World.add(world, this.slingMain);
    }

    attach(body){

        
        this.slingMain.bodyA = body


    };

    detach(){

        this.slingMain.bodyA = null;

    }


    display(){

        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.slingMain.bodyA){
            var pointA = this.slingMain.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }

      


    }



}