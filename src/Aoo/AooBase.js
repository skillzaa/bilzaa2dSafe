
export default class AooBase{    
constructor(){
    this.data=[];
}
add(){

} 
push(a){
return this.data.push(a);
}
get length(){
return this.data.length;
}


setSingleValue(name,value){
    this.data.forEach(bd => {
            if(name === bd.name){
                bd.value = value;
            }
    });
  
return true;    
}//..

///////////////////
}