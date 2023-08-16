let arr = [];

let lista = ["melancia","laranja","acerola"];
lista[3]= "limão";
lista[0]= "manga";

console.log(lista.length);
console.log(lista);

//push - adicionando no final do array
lista.push('melão');
console.log(lista);


//pop tirando do final 
lista.pop();
console.log(lista);

//unshift - add no inicio do array
lista.unshift('carambola');
console.log(lista);

//shift remove o primeiro da lista
lista.shift()
console.log(lista);

// acessar o ultimo elemento de um array
console.log(lista[lista.length - 1]);

//verificar se e um array
console.log(Array.isArray(lista));

//splice - colocar elementos no meio dele 
lista.splice(2,0,"caju")
console.log(lista);

lista.splice(2,1);
console.log(lista);

lista.splice(3,1);
console.log(lista);

//indexof acha o index do elemento
console.log(lista.indexOf('laranja'));

//join string 
console.log(lista.join(" - "));

//reverse- inverter a ordem
console.log(lista.reverse());

