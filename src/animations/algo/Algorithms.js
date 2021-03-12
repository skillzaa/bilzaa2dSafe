import linear from "./linear.js";
import randomNumber from "./randomNumber.js";

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
    
        default:
            break;
    }
    return a;    
}
}