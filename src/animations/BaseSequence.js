

export default class BaseSequence {

constructor(name="newSequence",type="basic"){
 this.name = name;   
 this.type = type;   
 this.animationData = [];
 this.customData = null;
 this.alternativeDraw = null;
 this.comments = "";
 this.startSecond = 0;
 this.endSecond = 0;
}

animationManipulation(){console.log("animationManipulation");}


//...............................................    
}