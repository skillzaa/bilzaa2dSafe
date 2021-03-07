
import BaseSequence from "./BaseSequence.js";

export default class Move extends BaseSequence {

constructor(){
    super("move","basic");
 this.animationData = ["x","y"];
 
 this.comments = "This object once attached to an element will make that element move as per the given parameters.";

}

animationManipulation(currentSecond,args){
// args.x = args.x + 1;
// args.y = args.y + 1;
console.log("animationManipulation");
//return args;
}


//...............................................    
}