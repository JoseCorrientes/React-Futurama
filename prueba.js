import {Howl, Howler} from  "howler";
import futurama from "./src/media/FutThemeSong.mp3";

const sound = new Howl({
    src: [[futurama]]
})


sound.play();