import SingleVariableBaseAnimation from "./SingleVariableBaseAnimation.js";

export default class AnimationCollection {
constructor(){
this.data = [];    
}

add(valueName="x",from=0,to=100,fromSecond=0,toSecond=60,algo="linear"){
const a = new SingleVariableBaseAnimation(valueName,from,to,fromSecond,toSecond,algo);
this.add.push(a);
return a;
}
        


//...............................................    
}