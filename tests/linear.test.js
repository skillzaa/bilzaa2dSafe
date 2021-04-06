/**i dont need attributes since now my code is DE_COUPLED it just get the required data and return data */
//const attributes = require("./attributes.js")["default"];
const Linear = require("../testSrc/animations/Linear");

test('Animation will run only between the given seconds-1', () => {
const liner = new Linear( {attributeToAnimate: "width",fromSecond:2, toSecond:10},{from:0, to:100});
const ret = liner.animate(100,11);
expect(ret).toEqual(100); 
});

test('Animation will run only between the given seconds-2', () => {
  const liner = new Linear( {attributeToAnimate: "width",fromSecond:2, toSecond:10},{from:0, to:100});
  const ret = liner.animate(100,1);
  expect(ret).toEqual(100); 
  });
  
test('Animation loop with wrong seconds/time--stupid test', () => {
  
  for (let i = 0; i < 50; i++) {
    const fromSecond = (Math.random()* 10);
    const toSecond = fromSecond + 10;
    const liner = new Linear( {attributeToAnimate: "width",fromSecond:fromSecond, toSecond:toSecond},{from:0, to:100});

    const ret = liner.animate(100,toSecond + 10);
    expect(ret).toEqual(100);   
  }
  
  });
  

test('Finally the mighty Loop---', () => {
const l = new Linear( {attributeToAnimate: "width",fromSecond:1, toSecond:10},{from:100, to:500});

let currentSecond = 1.10; //its 1.10 and not 1 since then the first result is not changed--where as i want to use greate than instead of greater than or equal in the test.
let attributeToAnimateDataLastValue = l.fromSecond; //start value

do {
  let newValue = l.animate(attributeToAnimateDataLastValue,currentSecond);
//--only the first time the incoming number and return number are same
  // expect(newValue).toBeGreaterThanOrEqual(attributeToAnimateDataLastValue); 
  
  expect(newValue).toBeGreaterThan(attributeToAnimateDataLastValue);

  //console.log("currentSecond",currentSecond, "newValue", newValue,"attributeToAnimateDataLastValue",attributeToAnimateDataLastValue);
  
  attributeToAnimateDataLastValue = newValue;

  currentSecond+= 0.10;

} while (currentSecond <= 10); //this will not work with 11 or greater
});

