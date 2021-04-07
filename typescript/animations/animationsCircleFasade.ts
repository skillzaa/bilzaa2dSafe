import AnimationsFasade from "./AnimationsFasade.js";
import Linear from "./Linear.js";

export default class AnimationsCircleFasade extends AnimationsFasade{

constructor(){
    super();
}

scale(fromSecond:number,toSecond:number,fromRadius:number,toRadius:number){
    const w = new Linear(
        {attributeToAnimateName: "radius",fromSecond:fromSecond, toSecond:toSecond,readOnlyElementAttrNames:[]},{from:fromRadius, to:toRadius});
    this.data.push(w);    
    return true;    
}
rotate(){
    
}
////888888888888888888888888888888888888888888888888    
////888888888888888888888888888888888888888888888888    
////888888888888888888888888888888888888888888888888    
}