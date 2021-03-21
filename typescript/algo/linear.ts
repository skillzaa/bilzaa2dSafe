const linear = function(bdReqForAni,currentSecond){
    const timeDiff = parseInt((this.toSecond - this.fromSecond));
   const totalValueDiff = parseInt((this.argsForAlgo.to - this.argsForAlgo.from));
   this.deltaPerSecond = totalValueDiff / timeDiff;  
   this.deltaPerFrame = this.deltaPerFrame = this.deltaPerSecond/this.fps;
   
   //------------    
   bdReqForAni.forEach(attribute => {
    if(attribute.name == this.attribute){
      //here its just ++ wo time, note the +=  
        attribute.value += this.deltaPerFrame ;
      //now am using current second
     // attribute.value = this.from + (this.deltaPerSecond * currentSecond)  ;
    }
});
   return bdReqForAni;;        
   }

   export default  linear;


   
   

