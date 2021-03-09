/**This is just an interface class to offer animation sequences */
import BaseAnimation from "./BaseAnimation.js";
import Move from "./Move.js";
import Rotate from "./Rotate.js";
import Scale from "./Scale.js";
import Height from "./Height.js";
import Width from "./Width.js";
import RandomBackgroundColor from "./RandomBackgroundColor.js";

export default class Animations {
constructor(){
}
addNew(incomming={}){
return new BaseAnimation(incomming);
}


//...............................................    
}