let arr = [];

let lista = ["melancia","laranja","acerola"];
lista[3]= "limão";
lista[0]= "manga";

console.log(lista.length);//4
console.log(lista);// [ 'manga', 'laranja', 'acerola', 'limão' ]

//push - adicionando no final do array
lista.push('melão');
console.log(lista);
//[ 'manga', 'laranja', 'acerola', 'limão', 'melão' ]    

//pop tirando do final 
lista.pop();
console.log(lista);
//[ 'manga', 'laranja', 'acerola', 'limão' ]

//unshift - add no inicio do array
lista.unshift('carambola');
console.log(lista);
//[ 'carambola', 'manga', 'laranja', 'acerola', 'limão' ]

//shift remove o primeiro da lista
lista.shift()
console.log(lista);
//[ 'manga', 'laranja', 'acerola', 'limão' ]


// acessar o ultimo elemento de um array
console.log(lista[lista.length - 1]);
//limão

//verificar se e um array
console.log(Array.isArray(lista));
//true

//splice - colocar elementos no meio dele 
lista.splice(2,0,"caju")
console.log(lista);
//[ 'manga', 'laranja', 'caju', 'acerola', 'limão' ]

lista.splice(2,1);
console.log(lista);
//[ 'manga', 'laranja', 'acerola', 'limão' ]

lista.splice(3,1);
console.log(lista);
//[ 'manga', 'laranja', 'acerola' ]


//indexof acha o index do elemento
console.log(lista.indexOf('laranja'));
//1

//join string 
console.log(lista.join(" - "));
//manga - laranja - acerola

//reverse- inverter a ordem
console.log(lista.reverse());
//[ 'acerola', 'laranja', 'manga' ]
