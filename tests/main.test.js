const Bilzaa2d = require('../testsrc/bilzaa2d');

const b = new Bilzaa2d();

test('adds 1 + 2 to equal 3', () => {
    const ans  = b.stop();
    expect(b.stop()).toBe(50);
  });