import Camera from "./classes/Camera";
import Mob from "./classes/Mob";
import Player from "./classes/Player";
import "./renderer";

const
    mobs: Mob[] = [...Array(600)].map(()=> new Mob),
    player: Player = new Player;

let time = 0;
loop();
function loop(): void {
    requestAnimationFrame(loop);
    time ++;
    
    player.update(time);
    player.mouseMove();

    Camera.move(player);
    
    mobs.map(mob=> {
        
        mob.update(time);
        
        mobs.map(mob2=> {
            
            mob.collision(mob2);
            
        });
        player.impulse(mob);
        
    })
    
}