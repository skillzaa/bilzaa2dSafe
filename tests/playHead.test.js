const Bilzaa2d = require('../testsrc/bilzaa2d');
const b = new Bilzaa2d();
const ph = b.playHead;

let data = 0;

test('start at start =0', () => {
  expect(ph.runningTime()).toEqual(0);
 ph.play();
});

test('ph.play > 0  & pause', () => {
  expect(ph.runningTime()).toBeGreaterThanOrEqual(0);
  data = ph.runningTime();
  ph.pause();
});

test('test pause', () => {
  let n = ph.runningTime();
  expect(n).toEqual(data);
  ph.forward(3000);
});

test('forward', () => {
  let n = ph.runningTime();
  expect(n).toEqual(data+3000);
  ph.rewind(3000)
});
test('rewind', () => {
  let n = ph.runningTime();
  expect(n).toEqual(data); //add 300 and subtract 3000
  ph.stop();
});
test('stop', () => {
  let n = ph.runningTime();
  expect(n).toEqual(0); //add 300 and subtract 3000
});