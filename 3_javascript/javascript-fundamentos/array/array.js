console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length);

aprovados[9] = 'Rafael'
console.log(aprovados.length);
console.log(aprovados[8] === undefined); // true
 
console.log(aprovados);
aprovados.sort()
console.log(aprovados); // ordenou e jogou os undefineds pro final

delete aprovados[1] // undefined
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']

// Primeiro parametro é o indice, e o segundo é a qtde que vai ser removida
aprovados.splice(1, 2)
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']

// O terceiro parametro em diante são os novos elementos que vão ser adicionados
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados);






