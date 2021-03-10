

export default class AOO{    
constructor(){
    this.data=[];
}
    
add(name="x",value=10,type="number"){
const a = {};
a.name= name;
a.value= value;
a.type= type;
this.data.push(a);
return a;
}
//---------------------------------
}