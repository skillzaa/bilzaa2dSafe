import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();
const element = bilzaa2d.addItem();
const e2 = bilzaa2d.addItem();

//element.addMove(100,100,600,100,0,100); //rotate----
element.addMove(10,10,500,10,1,20); //top line
element.addMove(500,10,500,500,20,40); // right line
element.addMove(500,500,10,500,40,60); //bottom line
element.addMove(10,500,10,10,60,80); // left line
/////////////////////////////////////////////////////////
e2.addMove(100,500,500,500,1,20); //top line
e2.addMove(500,500,100,500,20,40); // right line
e2.addMove(100,500,500,500,40,60); //bottom line
e2.addMove(500,500,100,500,60,80); // left line
/////////////////////////////////////////////////////////
bilzaa2d.play();
/////////////////////////////////////////////////////////

