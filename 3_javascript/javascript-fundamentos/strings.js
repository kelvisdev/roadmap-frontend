const pessoa = "Kelvis"

console.log(pessoa.charAt(4)); // i
console.log(pessoa.charAt(6)); // "" vazio
console.log(pessoa.charCodeAt(3));

console.log(pessoa.indexOf('e')); // 1 existe, -1 não existe o "e" dentro da string

console.log(pessoa.substring(1)); // a partir do indice 1
console.log(pessoa.substring(0, 3)); // do indice 0 ate o 3

console.log('Profissional ' + pessoa + "!");
console.log('Profissional '.concat(pessoa).concat("!"));
console.log(pessoa.replace('s', 'n')); // substitui, pode ser usada expressao regular

console.log('Ana,Maria,Pedro'.split(',')); // quebra string em uma array




