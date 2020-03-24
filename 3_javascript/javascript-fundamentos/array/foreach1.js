const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// function com indice
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1} ${nome}`);
})

// arrow function 
aprovados.forEach(nome => console.log(nome));

// arrow function com indice
aprovados.forEach((nome, indice) => console.log(`${indice + 1} ${nome}`));


// em uma variavel
const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados)


// callback com o terceiro parametro que é a propria lista
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1} ${nome}`);
    console.log(array);
})