export default class input {
    constructor(game) {
        this.game = game;
        this.mouseX;
        this.mouseY;
        this.mouseDown;

        this.init();
    }

    init() {
        document.addEventListener("mousemove", e => {
            this.mouseX = e.pageX;
            this.mouseY = e.pageY;
        });

        document.addEventListener("mousedown", e => {
            this.mouseDown = true;
        });

        document.addEventListener("mouseup", e => {
            this.mouseDown = false;
        });
    }


}