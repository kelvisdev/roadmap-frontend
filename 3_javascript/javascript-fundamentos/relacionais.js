console.log('01)', '1' == 1); // true
console.log('02)', '1' === 1); // false nao sao estritamente iguais

console.log('03)', '3' != 3); // false
console.log('03)', '3' !== 3); // true

console.log('05)', 3 < 2); // false
console.log('06)', 3 > 2); // true
console.log('07)', 3 <= 2); // false
console.log('08)', 3 >= 2); // true

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2); // false  (referencia de memoria)
console.log('10)', d1 == d2); // false  (referencia de memoria)

console.log('11)', d1.getTime() === d2.getTime()); // true compara os valores e o tipo
console.log('12)', d1.getTime() == d2.getTime()); // true compara os valores

console.log('13)', undefined == null); // true compara os valores
console.log('14)', undefined === null);

const a = undefined;
const b = null;
console.log('a == b', a == b);
console.log('a === b', a === b);


