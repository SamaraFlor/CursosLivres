function primeiraFuncao() {
    console.log("aquii 1 ");
};
// aquii 1 
primeiraFuncao();

function nomesDeMenino(nome){
    console.log("o nome é " + nome);
};

nomesDeMenino("Roberto");
nomesDeMenino("João");
nomesDeMenino("Pedro");
let nomeUsuario = "Mario";
nomesDeMenino(nomeUsuario);
// o nome é Roberto
// o nome é João
// o nome é Pedro
// o nome é Mario

function soma(a,b) {
    return a + b;
};


console.log(soma(2,2));//4
let somarNumero = soma(1,8);
console.log(somarNumero);//9
let somaNumero2 = soma(18,98);
console.log(somaNumero2);//116

const countTo = function(max){
    console.log(arguments);//[Arguments] { '0': 79 }
    for (let index = 0; index < max; index++) {
        console.log(index);
    }
}
countTo(79);// 0 ate 78

function sumCurryingFunc(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
            
        }
        
    }
}

   //                    parametros                retorno
const sumCurrying = (num1) => (num2) => (num3) => num1 + num2 + num3;

console.log("a soma é ", sumCurryingFunc(2)(3)(7));//a soma é  12
console.log("a soma é ", sumCurrying(2)(3)(7));//a soma é  12

// ele soma (1)(1) de cima mais o ( 1 ) de baixo
const somandoFunc = sumCurrying(1)(1);
console.log('a soma é ', somandoFunc(1));//a soma é  3

function soma(nua,nub) {
    return nua + nub
}
console.log(soma(12,21));//33

const somar = function (max) {
    const array = [];
    for (let index = 0; index < max; index++) {
      array.push(index)
    }
    return array;
}

console.log(somar(23));
// [
//    0,  1,  2,  3,  4,  5,  6,  7,
//    8,  9, 10, 11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20, 21, 22
// ]


// funçôes declarativas tem que ter nome
function essa() {
    console.log("essa é uma função!");
};
essa();
//expressoes de função, não precisa do nome
let carro = function (nome) {
    console.log("este carro é ", nome);
}
carro("fusca");
//arrow functions sempre anonimas,

let moto = (nome) => console.log("sou uma honda");

moto();