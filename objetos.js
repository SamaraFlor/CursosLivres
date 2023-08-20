let objc = {
    nome: "Samara",
    idade: 23,
    endereco: "Rua general 123",
    casa: true,
    apartamento: false
};

objc.endereco = "rua 234A"
objc.complemento = "rua sem saida "
 console.log(objc);
//  {
//     nome: 'Samara',
//     idade: 23,
//     endereco: 'rua 234A',
//     casa: true,
//     apartamento: false,
//     complemento: 'rua sem saida '
//   }
 console.log(objc.complemento);
//rua sem saida 
 
 console.log(typeof objc);
 //object
 console.log(objc.nome);
 //Samara