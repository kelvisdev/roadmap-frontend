comparaComThis = function(param) {
    console.log(this === param);    
}
comparaComThis(global) // global equivalente ao windows do Browser

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)


// cada funcao é um modulo no node, por isso vai apontar pro objeto corrente
let comparaComThisArrow = param => console.log(this === param); // aponta para o escopo
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)





