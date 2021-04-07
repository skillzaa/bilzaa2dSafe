import AnimationsFasade from "./AnimationsFasade.js";
import Linear from "./Linear.js";

export default class AnimationsTextFasade extends AnimationsFasade{

constructor(){
    super();
}

widen(fromSecond:number,toSecond:number,from:number,to:number){
    const l = new Linear(
        {attributeToAnimateName: "fontSize",fromSecond:fromSecond, toSecond:toSecond,readOnlyElementAttrNames:[]},{from:from, to:to});
    this.data.push(l);    
    return true;    
}
////888888888888888888888888888888888888888888888888    
////888888888888888888888888888888888888888888888888    
////888888888888888888888888888888888888888888888888    
}