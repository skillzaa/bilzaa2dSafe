import linear from "./linear.js";
import randomNumber from "./randomNumber.js";
import randomColor from "./randomColor.js";
import toggle from "./toggle.js";

export default class Algorithms {
constructor(){

}
getAlgo(name){
let a;    
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
            return toggle;  
            break;
    
        default:
            break;
    }
    return a;    
}
}