function rand([min = 0, max = 1000]) {
    if (min > max) 
        [min, max] = [max, min]
    
        const valor = Math.random() * (max - min) + min;

        return Math.floor(valor)

}

console.log(rand([50, 40])); // exemplo 1
console.log(rand([992])); // exemplo 2
console.log(rand([, 10])); // exemplo 3
console.log(rand([])); // exemplo 4

/*
    vai dar um erro
    pois na funcao ele vai tentar desestruturar um objeto que não existe
    console.log(rand());
*/ 
