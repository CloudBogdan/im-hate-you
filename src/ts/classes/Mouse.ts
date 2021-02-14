class Mouse {
    x: number
    y: number
    down: boolean
    
    constructor() {
        
        this.x = 
        this.y = 0;
        this.down = false;

        onpointermove = e=> {

            this.x = e.clientX;
            this.y = e.clientY;

        };
        onpointerdown = ()=> this.down = true;
        onpointerup = ()=> this.down = false;
        
    }
}

export default new Mouse;