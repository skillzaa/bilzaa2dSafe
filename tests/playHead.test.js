const Bilzaa2d = require('../testsrc/bilzaa2d');
const b = new Bilzaa2d();
const ph = b.playHead;

console.log(ph);


test('current second should be 0', () => {
  expect(ph.runningTime()).toEqual(0);
 
});