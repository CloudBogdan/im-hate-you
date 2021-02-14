import { Sprite, Texture } from "pixi.js";
import { random, Vector2 } from "../math";
import { app } from "../renderer"
import Camera from "./Camera";
// @ts-ignore
import mob_stay_frame from "../../img/mob-stay.png";
// @ts-ignore
import mob_walk_0_frame from "../../img/mob-walk-0.png";
// @ts-ignore
import mob_walk_1_frame from "../../img/mob-walk-1.png";
const mob_walk_frames = { mob_walk_0_frame, mob_walk_1_frame };

class Mob {
    position: Vector2
    velocity: Vector2
    is_moving: boolean
    direction: Vector2

    sprite: Sprite
    frame: number

    radius: number
    
    constructor() {
        
        this.position = new Vector2(random(0, innerWidth), random(0, innerHeight));
        this.velocity = new Vector2;
        this.is_moving = false;
        this.direction = new Vector2;

        this.sprite = Sprite.from(mob_stay_frame);
        this.sprite.width = 26;
        this.sprite.height = 36;
        this.sprite.anchor.set(.5);
        this.updateSprite();
        
        this.frame = 0;
        
        this.radius = 30;

        app.stage.addChild(this.sprite);
        
    }

    update(time: number): void {
        this.is_moving = Math.round(this.velocity.x) !== 0 || Math.round(this.velocity.y) !== 0;

        this.move();
        this.teleport();
        this.animate(time);
    }
    
    move(): void {

        this.velocity.add(this.direction);
        
        this.position.add(this.velocity);
        this.velocity.mul(.7);

        this.updateSprite();

    }
    collision(bro: Mob): void {

        if (this.position.distance(bro.position) < this.radius && bro.position.distance(this.position) < this.radius) {

            const v = Math.abs(Math.sqrt(
                (bro.position.x - this.position.x) ** 2 +
                (bro.position.y - this.position.y) ** 2
            ));
            
            this.direction = new Vector2(
                -(bro.position.x - this.position.x) / v,
                -(bro.position.y - this.position.y) / v,
            );
            bro.direction = new Vector2(
                (bro.position.x - this.position.x) / v,
                (bro.position.y - this.position.y) / v,
            );

        } else {

            this.direction = new Vector2;

        }

    }

    animate(time: number): void {

        if (time % 10 === 0)
            this.frame ++;

        if (this.frame > 1) this.frame = 0;

        if (this.is_moving)
            this.sprite.texture = Texture.from((mob_walk_frames as any)[`mob_walk_${ this.frame }_frame`]);
        else
            this.sprite.texture = Texture.from(mob_stay_frame);

    }
    updateSprite(): void {
        this.sprite.position.set(this.position.x - Camera.x, this.position.y - Camera.y);
    }
    teleport(): void {

        if (this.position.x > Camera.x + innerWidth + 50) {
            this.position.x = Camera.x + -50;
            this.position.y = Camera.y + random(0, innerHeight);
        }
        else if (this.position.x < Camera.x + -50) {
            this.position.x = Camera.x + innerWidth + 50;
            this.position.y = Camera.y + random(0, innerHeight);
        }
            
        if (this.position.y > Camera.y + innerHeight + 50) {
            this.position.y = Camera.y + -50;
            this.position.x = Camera.x + random(0, innerWidth);
        }
        else if (this.position.y < Camera.y + -50) {
            this.position.y = Camera.y + innerHeight + 50;
            this.position.x = Camera.x + random(0, innerWidth);
        }

    }
}
export default Mob;