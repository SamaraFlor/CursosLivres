function removerCaracteres(string) {
    return string.replace( /[^a-zA-Z0-9]/g, " ");    
};
console.log(removerCaracteres("Olá Mundo"));
//Ol  Mundo

function removerCaracteresEspeciais(string) {
    return string.replace( /[, !]/g, " ");    
};
console.log(removerCaracteresEspeciais("Olá Mundo"));
//Olá Mundo 

function cadastrarCPF(cpf) {
    return cpf.replace( /[ "" . -]/g, " ");    
};
console.log(cadastrarCPF("366.098.287-87"));
//366 098 287 87

    
