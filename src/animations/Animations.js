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

addMove(fromX,fromY,toX,toY,fromSecond,toSecond){
return new Move(fromX,fromY,toX,toY,fromSecond,toSecond);
}
addRotate(fps=6,valueName,from,to,fromSecond,toSecond){
return new Rotate(fps=6,valueName,from,to,fromSecond,toSecond);
}
addHeight(){
const ani = new BaseAnimation();
}
addWidth(fps=60,valueName="width",from=10,to=100,fromSecond=1,toSecond=60){
return new Width(fps,valueName,from,to,fromSecond,toSecond);
}
addRandomBackgroundColor(fps=60,valueName="fillStyle",from=10,to=100,fromSecond=1,toSecond=60){
return new RandomBackgroundColor();
}
addScale(fps=6,valueName,from,to,fromSecond,toSecond){
return new Scale(fps=6,valueName,from,to,fromSecond,toSecond);
}


//...............................................    
}