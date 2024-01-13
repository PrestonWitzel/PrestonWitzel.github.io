export default class Inputs {
    constructor() {
        this.mouseX;
        this.mouseY;
        this.mouseDown;

        document.addEventListener("mousemove", e => {
            this.mouseX = e.pageX;
            this.mouseY = e.pageY;
        });

        document.addEventListener("mousedown", e => {
            this.mouseX = e.pageX;
            this.mouseY = e.pageY;
            this.mouseDown = true;
        });

        document.addEventListener("mouseup", e => {
            this.mouseDown = false;
        });
    }
}