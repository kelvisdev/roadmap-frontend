/*
* TABELA VERDADE
* Operadores Binários
    v E v => v  
    v E f => f  
    v E ? => f  

    v OU ? => v  
    f OU v => v  
    f OU f => f  

    v XOR v => f  
    v XOR f => v  
    f XOR v => v  
    f XOR f => f  

* Operador Unário
    !v => f
    !f => v
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 
    const manterSaudavel = !comprarSorvete // operador unário

    /* sem omitir, 
    return { 
        comprarSorvete: comprarSorvete, 
        comprarTv50: comprarTv50, 
        comprarTv32: comprarTv32, 
        manterSaudavel: manterSaudavel 
    }
    */    

    // Omitindo nomes, ES6
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }    

    // Pode das um alias no retorno 
    // return { sorvete: comprarSorvete, tv50: comprarTv50, tv32: comprarTv32, saudavel: manterSaudavel }
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));


