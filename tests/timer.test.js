const Bilzaa2d = require('../testsrc/bilzaa2d');

const bilzaa2d = new Bilzaa2d();

test('adds 1 + 2 to equal 3', () => {
    expect(bilzaa2d.timer.start()).toBeTruthy();
  });