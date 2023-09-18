
//variavel, variavel para o loop e incrementando
for (let index = 0; index < 10; index++) {
    console.log("repetindo for", index)
};
// repetindo for 0
// repetindo for 1
// repetindo for 2
// repetindo for 3
// repetindo for 4
// repetindo for 5
// repetindo for 6
// repetindo for 7
// repetindo for 8
// repetindo for 9

let numbers = [12,32,98,18,87];
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
};
// 12
// 32
// 98
// 18
// 87

for (let index = 5; index < 100; index *= 3) {
    console.log("aqui  ",index);
};

// aqui   5
// aqui   15
// aqui   45

for (let index = 4; index < 100; index *= 3) {
    console.log("aqui  ",index);
};
// aqui   4
// aqui   12
// aqui   36


//Para contar string
let count = ''
for (let index = 0; index < 10; index++) {  
    count  += String(index);
}
console.log(count);
//0123456789

//executa ate ser verdadeiro
let array = ['v1','v2','v3','v4','v5'];
let object = {propriedade1:'v1',propriedade2:'v2', propriedade3:'v3'};

for (let index = 0; index < array.length; index++) {
   console.log(index);
};

//for in executa repetiçãoa partir de uma propriedade
for (const i in array) {
  console.log("aqui ", i);
}


//for in em object pode ser declarada assim
for (i in object) {
  console.log(i);
}


let array1 = ['v1','v2','v3','v4','v5'];
let object1 = { propriedade1:'v1',propriedade2:'v2', propriedade3:'v3'};

// executa repetição a partir de valor
for ( iterator of array1) {
    console.log(iterator);//v1 v2 v3 v4 v5
}

// com objeto devemos colocar a propriedade
for ( iterator of object.propriedade2) {
    console.log(iterator);
    //imprime cada letra em uma linha
}