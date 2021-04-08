import AnimationsFasade from "./AnimationsFasade.js";
import Linear from "./Linear.js";

export default class AnimationsTextFasade extends AnimationsFasade{

constructor(){
    super();
}

scale(fromSecond:number,toSecond:number,fromFontSize:number,toFontSize:number){
    const w = new Linear(
        {attributeToAnimateName: "fontSize",fromSecond:fromSecond, toSecond:toSecond,readOnlyElementAttrNames:[]},{from:fromFontSize, to:toFontSize});
    this.data.push(w);    
    return true;    
}

////888888888888888888888888888888888888888888888888    
////888888888888888888888888888888888888888888888888    
////888888888888888888888888888888888888888888888888    
}