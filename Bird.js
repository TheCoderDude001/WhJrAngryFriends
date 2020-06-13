class Bird extends baseClass{

    constructor(x,y){

        super(x,y,50,50);
        this.image = loadImage("sprites/bird.png")
        this.trajImage = loadImage("sprites/traj.png")
        this.trajectory = [];

    }

    display(gameState){


        super.display();

        if (this.body.velocity.x > 10 && this.body.position.x > 200 && gameState === "launched"){

            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position)
        }

        for(var i; i< this.trajectory.length; i++){
            image(this.trajImage, this.trajectory[i][0], this.trajectory[i][1] )
        }


    };


}