/**i dont need attributes since now my code is DE_COUPLED it just get the required data and return data */
//const attributes = require("./attributes.js")["default"];
const Linear = require("../testsrc/animations/Linear.js")["default"];

const liner = new Linear( {attributeToAnimate: "width",fromSecond:1, toSecond:10},[],{from:0, to:100});
//console.log("Linear",Linear);

// test('start at start =0', () => {
// const x = attributes.getProperty("x");    
//     expect(100).toEqual(100); 
//   });

test('testing', () => {
const ret = liner.animate(100,0.16);
console.log("return",ret);
    expect(1.78).toEqual(1.78); 
  });

