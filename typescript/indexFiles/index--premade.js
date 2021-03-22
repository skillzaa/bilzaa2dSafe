import Bilzaa2d from "../../src/bilzaa2d.js";
const bilzaa2d = new Bilzaa2d();

bilzaa2d.element = bilzaa2d.premades.get("leftCurtain",bilzaa2d.element,{"fillStyle" : "red"}); 

bilzaa2d.play();

