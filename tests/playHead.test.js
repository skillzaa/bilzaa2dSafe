const Bilzaa2d = require('../testsrc/bilzaa2d');

const bilzaa2d = new Bilzaa2d();
let curSecOld =0;

test('current second should be 0', () => {
    expect(bilzaa2d.playHead.currentSecond).toEqual(0);
    bilzaa2d.playHead.start();
    //console.log("current second",bilzaa2d.playHead.currentSecond);
    curSecOld = bilzaa2d.playHead.currentSecond;
  });
//................................................
jest.setTimeout(6000);
test('Using Timeout with jest', async () => {
  await new Promise((r) => setTimeout(r, 2000));
  expect(curSecOld).toBeLessThan(bilzaa2d.playHead.currentSecond);
  bilzaa2d.playHead.pause();
  curSecOld = bilzaa2d.playHead.currentSecond;
});
//................................................
//................................................
jest.setTimeout(6000);
test('After pause the current sec remains the same', async () => {
  await new Promise((r) => setTimeout(r, 2000));
  expect(curSecOld).toEqual(bilzaa2d.playHead.currentSecond);
//console.log(`ohh-- old ${curSecOld} new ${bilzaa2d.playHead.currentSecond}`);
  //curSecOld = bilzaa2d.playHead.currentSecond;
  bilzaa2d.playHead.resume();
});
//................................................
//................................................
jest.setTimeout(6000);
test('After resume', async () => {
  await new Promise((r) => setTimeout(r, 2000));
  expect(curSecOld).toBeLessThan(bilzaa2d.playHead.currentSecond);
//console.log(`ohh-- old ${curSecOld} new ${bilzaa2d.playHead.currentSecond}`);
bilzaa2d.playHead.stop();
});
//................................................
//................................................
jest.setTimeout(6000);
test('After Stop current second shd be 0', async () => {
  await new Promise((r) => setTimeout(r, 2000));
  expect(bilzaa2d.playHead.currentSecond).toEqual(0);
  bilzaa2d.playHead.animationDuration = 5;
});
//................................................
//................................................
jest.setTimeout(6000);
test('animation duration reduced to 20 ', async () => {
  await new Promise((r) => setTimeout(r, 2000));
  expect(bilzaa2d.playHead.currentSecond).toEqual(5);
});
//................................................
