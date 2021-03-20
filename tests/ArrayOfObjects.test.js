const Aoo = require('../testsrc/Aoo/ArrayOfObjects').default;
const aoo = new Aoo();



test('start', () => {
const a = aoo.add("a");
//console.log(a);
expect(a.name).toMatch("a");
});
test('second a', () => {
const a = aoo.add("a");
//console.log(a)
expect(a.errorMessage).toMatch("nonUniqueName");
});
test('Empty', () => {
const b = aoo.add();
//console.log(b)
expect(b.name).toBeUndefined();
expect(b.errorMessage).toMatch("nonUniqueName");
});


