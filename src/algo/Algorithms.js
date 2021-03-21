import linear from "./linear.js";
import randomNumber from "./randomNumber.js";
import randomColor from "./randomColor.js";
import blink from "./blink.js";
export default class Algorithms {
    constructor() {
    }
    getAlgo(name) {
        switch (name) {
            case "linear":
                return linear;
                break;
            case "randomNumber":
                return randomNumber;
                break;
            case "randomColor":
                return randomColor;
                break;
            case "toggle":
                return blink;
                break;
            default:
                return linear;
                break;
        }
        //return "ok";//just to shut typescript off    
    }
}
