const Aoo = require('../src/Aoo/ArrayOfObjects-es');
const aoo = new Aoo();

//console.log(aoo);
test('start', () => {
const a = aoo.add("a");
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


