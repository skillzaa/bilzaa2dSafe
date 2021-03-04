import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();
const element = bilzaa2d.addRectangle();
const e2 = bilzaa2d.addRectangle();

//element.addMoveByFrames(100,100,600,100,0,100); //rotate----
element.addMoveByFrames(10,10,800,10,1,5); //top line
element.addMoveByFrames(800,10,800,800,5,10); // right line
element.addMoveByFrames(800,800,10,800,10,15); //bottom line
element.addMoveByFrames(10,800,10,10,15,20); // left line
/////////////////////////////////////////////////////////
// e2.addMoveByFrames(100,500,500,500,1,20); //top line
// e2.addMoveByFrames(500,500,100,500,20,40); // right line
// e2.addMoveByFrames(100,500,500,500,40,60); //bottom line
// e2.addMoveByFrames(500,500,100,500,60,80); // left line
/////////////////////////////////////////////////////////
bilzaa2d.play();
/////////////////////////////////////////////////////////

