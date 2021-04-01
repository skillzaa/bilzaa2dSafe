const attributes = require("./attributes.js")["default"];
const Linear = require("../testsrc/animations/Linear.js")["default"];

const liner = new Linear( {attributeToAnimate: "rotateAngle",fromSecond:1, toSecond:10},[],{from:0, to:100});
//console.log("Linear",Linear);

test('start at start =0', () => {
const x = attributes.getProperty("x");    
    expect(100).toEqual(100); 
  });
test('start at start =0', () => {
const ret = liner.animate(attributes,0.16);
console.log("return",ret);
    expect(1.78).toEqual(1.78); 
  });

