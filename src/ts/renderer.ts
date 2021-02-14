import { Application } from "pixi.js";

export const app = new Application({
    width: innerWidth,
    height: innerHeight,
    transparent: true,
    backgroundColor: 0xffffff,
});
document.body.appendChild(app.view);