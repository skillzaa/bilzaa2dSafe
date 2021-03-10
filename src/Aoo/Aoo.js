
export default class AOO{    
constructor(){
    this.data=[];
}
add(incomming = {}){
this.data.push(incomming);
return incomming;

} 
saveAttributeValues(retData){
    this.data.forEach(bd => {
        retData.forEach(ag => {
            if(ag.name == bd.name){
                bd.value = ag.value;
            }
        });
    });
  
return true;    
}//..

getAttributesByName(argumentsRequired=[]){
const ret = [];    
this.data.forEach(bd => {
    argumentsRequired.forEach(ag => {
        if(ag.name == bd.name){
            ret.push(bd);
        }
    });
});
return ret;    
}
    
// add(name="x",value=10,type="number"){
// const a = {};
// a.name= name;
// a.value= value;
// a.type= type;
// this.data.push(a);
// return a;
// }
//---------------------------------
}