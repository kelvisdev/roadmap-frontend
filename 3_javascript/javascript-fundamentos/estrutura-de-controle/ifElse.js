const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!');        
    } else {
        console.log('Reprovado!');
        
    }    
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!'); // Tomar cuidado com entrada de dados nao previstas, por conta de ser fracamente tipada