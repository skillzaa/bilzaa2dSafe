
import BaseAnimation from "./BaseAnimation.js";

export default class Scale extends BaseAnimation {

constructor(fromWidth=10,toWidth=100,fromHeight=10,toHeight=100,fromSecond=1,toSecond=30){
    super("move","basic");
 this.fromWidth = fromWidth;
 this.toWidth = toWidth;
 
 this.fromHeight = fromHeight;
 this.toHeight = toHeight;
 
 this.fromSecond = fromSecond;
 this.toSecond = toSecond;

this.deltaWidthPerSecond = this.calculateDeltaPerMinute(fromWidth,toWidth,fromSecond,toSecond);
this.deltaWidthPerFrame = this.deltaWidthPerSecond/this.fps;

this.deltaHeightPerMinute = this.calculateDeltaPerMinute(fromHeight,toHeight,fromSecond,toSecond);
this.deltaHeightPerFrame = this.deltaHeightPerMinute/this.fps;
 
this.bdReqForAni = [
     {name: "width"},
     {name:"height"}
 ];
 
 this.comments = "This object once attached to an element will make that element scale as per the given parameters.";

}

animationManipulation(bdReqForAni,currentSecond){
   
bdReqForAni.forEach(element => {
    if(element.name == "width"){
        element.value += this.deltaWidthPerFrame ;
    }
    if(element.name == "height"){
        element.value += this.deltaHeightPerFrame ;
    }
});
return bdReqForAni;
}


//...............................................    
}