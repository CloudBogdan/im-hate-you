import { Vector2 } from "../math";
import Mob from "./Mob";
import Mouse from "./Mouse";

class Player extends Mob {
    constructor() {
        super();

        this.radius = 200;
        
    }
    
    impulse(mob: Mob): void {

        if (this.position.distance(mob.position) < this.radius) {
            
            const v = Math.abs(Math.sqrt(
                (mob.position.x - this.position.x) ** 2 +
                (mob.position.y - this.position.y) ** 2
            ));
            
            mob.direction = new Vector2(
                (mob.position.x - this.position.x) / v,
                (mob.position.y - this.position.y) / v,
            );

        } else
            mob.direction = new Vector2;

    }
    mouseMove(): void {

        if (!Mouse.down) return;
        
        this.velocity.set((Mouse.x - innerWidth / 2) / 100, (Mouse.y - innerHeight / 2) / 100);

    }
};

export default Player;