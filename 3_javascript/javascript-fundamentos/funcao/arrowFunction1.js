// exemplo 1
let dobro = function(a) {
    return 2 * a;
}

// exemplo 2
dobro = (a) => {
    return 2 * a;
}

// exemplo 3
dobro = a => 2 * a; // return implicito

console.log(dobro(Math.PI));

// exemplo 4
let ola = function () {
    return 'Olá'
}

// exemplo 6
ola = () => 'Olá'

// exemplo 7
ola = _ => 'Olá' // possui um parametro, mas na chamada vc pode ignorar se quiser

console.log(ola());
