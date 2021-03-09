import BaseAnimation from "./BaseAnimation.js";

export default class AnimationGenerator {

constructor(){

}

createAnimation(incomming = {}){
return  new BaseAnimation(incomming);
}
//...............................................    
}