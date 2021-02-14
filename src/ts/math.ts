export class Vector2 {
    x: number
    y: number
    
    constructor(x?: number, y?: number) {

        this.x = x || 0;
        this.y = y || 0;

    }

    distance(vec: Vector2): number {
        return Math.sqrt((this.x - vec.x) ** 2 + (this.y - vec.y) ** 2);
    }
    
    set(x: Vector2["x"], y: Vector2["y"]): Vector2 {
        this.x = x;
        this.y = y;
        
        return this;
    }
    add(vec: Vector2): Vector2 {
        this.x += vec.x;
        this.y += vec.y;
        
        return this;
    }
    sub(vec: Vector2): Vector2 {
        this.x -= vec.x;
        this.y -= vec.y;
        
        return this;
    }
    mul(value: number): Vector2 {
        this.x *= value;
        this.y *= value;
    
        return this;
    }
    div(value: number): Vector2 {
        this.x /= value;
        this.y /= value;
        
        return this;
    }
    pow(): Vector2 {
        this.x = this.x ** 2;
        this.y = this.y ** 2;

        return this;
    }
}

export const random = (from: number, to: number)=>
    Math.random() * (to - from) + from;