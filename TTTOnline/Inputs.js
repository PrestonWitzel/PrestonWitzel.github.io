export default class Inputs {
    constructor(game) {
        this.game = game;
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

        if(this.game.isMobile) { 
            document.addEventListener("touchstart", e => { 
                this.mouseDown = true;
                this.mouseX = e.touches[0].clientX;
                this.mouseY = e.touches[0].clientY;
                console.log(e.pageX + ", " + e.pageY);
            });

            document.addEventListener("touchend", e => {
                this.mouseDown = false;
            });
        }
    }
}