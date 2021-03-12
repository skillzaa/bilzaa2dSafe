const toggle = function(bdReqForAni,currentSecond){
    if(typeof this.future.counter == "undefined"){
        this.future.counter = 0 
    }else {
        this.future.counter++;
    }

//-----------------------    
    bdReqForAni.forEach(element => {

        if((element.name == this.valueName) && this.future.counter > 15){
            this.future.counter =0;
            if(element.value === true){
                element.value = false;
            }else{
                element.value = true;
            }
        }
    });
return bdReqForAni;;        
}

export default toggle;