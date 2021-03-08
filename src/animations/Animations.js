/**This is just an interface class to offer animation sequences */
import Move from "./Move.js";
export default class Animations {

constructor(){
    
}

addMove(fromX,fromY,toX,toY,fromSecond,toSecond){
return new Move(fromX,fromY,toX,toY,fromSecond,toSecond);
}


//...............................................    
}