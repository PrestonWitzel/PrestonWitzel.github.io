import circle from "./Circle.js" 
import input from "./Input.js"
import spawner from "./Spawner.js"

export default class Game {
    
    constructor(WIDTH, HEIGHT) {
        this.input = new input(this);
        this.screenWidth = WIDTH;
        this.screenHeight = HEIGHT
        this.maxCircles = 200;
        this.x = 0;
        this.y = 0;
        this.width = 1912;
        this.height = 924;
        this.soundCache = 0;
        this.maxSounds = 50;
        this.sfxVolume = 0;
        this.musicVol = 0;

        this.circleSpawner = new spawner(this);
        this.circles = [];
        this.particles = [];

        for(let i = 0; i < this.maxCircles; i++) {
            let c = new circle(this);
            this.circles.push(c);
        }
    }


    update() { 
        this.circles = this.circles.filter(c => !c.deleted);
        this.particles = this.particles.filter(p => !p.deleted);

        this.circles.forEach(c => {
            c.update();
        });

        this.particles.forEach(p => {
            p.update();
        });

        this.circleSpawner.update();
    }

    draw(ctx) {
        this.circles.forEach(c => {
            c.draw(ctx);
        });

        this.particles.forEach(p => {
            p.draw(ctx);
        });
    }

    playMusic(st, vol) {
        var audio = new Audio(`./sounds/music/${st}`);
        if(vol + this.musicVol > 0) {
            audio.volume = vol + this.musicVol;
        } else {
            audio.volume = 0
        }
        audio.play();
    }

    soundEffect(sfx, vol) {
        var audio = new Audio(`./sounds/${sfx}`);
        if(vol + this.sfxVolume > 0) {
            audio.volume = vol + this.musicVol;
        } else {
            audio.volume = 0
        }
        audio.addEventListener('ended', () => {
            this.soundCache--;
        });
        audio.play();
    }

}