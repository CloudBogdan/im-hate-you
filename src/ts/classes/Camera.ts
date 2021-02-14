import Mob from "./Mob";

class Camera {
    x: number
    y: number
    
    constructor() {
        
        this.x = 
        this.y = 0;

    }

    move(target: Mob): void {

        this.x = target.position.x - innerWidth / 2;
        this.y = target.position.y - innerHeight / 2;

    }
};

export default new Camera;