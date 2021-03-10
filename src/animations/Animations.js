/**This is just an interface class to offer animation sequences */
import SingleVariableBaseAnimation from "./SingleVariableBaseAnimation.js";

export default class Animations {
constructor(){
}
addNew(incomming={}){
return new SingleVariableBaseAnimation(incomming);
}
//...............................................    
}