import linear from "./Linear";
// import randomNumber from "../algo/randomNumber.js";
// import randomColor from "../algo/randomColor.js";
// import blink from "../algo/blink.js";

export default class Algorithms {
constructor(){

}
getAlgo(name:string){
    switch (name) {
        case "linear":
            return linear;  
            break;
        case "randomNumber":
         //   return randomNumber;  
            break;
        case "randomColor":
         //   return randomColor;  
            break;
        case "toggle":
         //   return blink;  
            break;
    
        default:
            return linear; 
            break;
    }
    //return "ok";//just to shut typescript off    
}
}