

export default class BaseAnimation {

constructor(name="newSequence",type="basic"){
 this.name = name;   
 this.type = type;   //for now not used
this.bdReqForAni = [];//arg req from elem for animation manipulation
 this.customData = null;
 this.alternativeDraw = null;
 this.comments = "";
 this.startSecond = 0;
 this.endSecond = 0;
 this.fps = 60;
}

animationManipulation(bdReqForAni,currentSecond){console.log("animationManipulation");}


//...............................................    
}