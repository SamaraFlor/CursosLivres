// //objeto, consigo desestruturar somente com { }

// const pessoa = {
//     nome: 'Samara',
//     idade: 28,
//     cidade: "São Paulo"
// };
// // consigo atribuir outro nome
// ({nome:name, idade: age} = pessoa);
// console.log(name, age);


// // array consigo pegar o array inteiro ou so a primeira letra e consigo pegar o primeiro ou ultimo elemento somente passando uma virgula
// const frutas = ["banana","uva","pera","maça","kiwi"];
// const [ b, ...rest ] = frutas;
// console.log(b, rest);

//usando função para destruturar objeto
function baterFrutas({ morango }) {
    console.log(morango);
}

const vitaminaFrutas = {
    manga: "manga",
    uva: "uva",
    morango: "morango"
}
baterFrutas(vitaminaFrutas);


// desestrurando usando array e o nome não importa 
function salanaNoPote([ s1, ...resto]) {
    console.log(resto.join("  - ") + s1);
}

salanaNoPote(["alface"]);

//desestruturas tirar de um conjunto de dados para usar 