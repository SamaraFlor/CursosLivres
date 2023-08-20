let listaEmail=[
    "mariabonita@example",
    "maria@example",
    "carla@example.com",
    "luiza@example.com"
];

const enviarEmail = (email) =>{
    console.log("email enviado com sucesso", email)
};

// email enviado com sucesso mariabonita@example
// email enviado com sucesso maria@example    
// email enviado com sucesso carla@example.com
// email enviado com sucesso luiza@example.com
// email enviado com sucesso mariabonita@example

listaEmail.forEach((item, posicao, arr) => {
    enviarEmail(item);
    console.log(" sua posição é ", posicao);
    console.log(" A quantidade de pessoas é ", arr.length)
});
// sua posição é  0
// email enviado com sucesso maria@example
//  sua posição é  1
// email enviado com sucesso carla@example.com
//  sua posição é  2
// email enviado com sucesso luiza@example.com
//  sua posição é  3
//////////////////////////////////////////////////////////////////////////////
// email enviado com sucesso mariabonita@example
//  sua posição é  0
//  A quantidade de pessoas é  4
// email enviado com sucesso maria@example
//  sua posição é  1
//  A quantidade de pessoas é  4
// email enviado com sucesso carla@example.com
//  sua posição é  2
//  A quantidade de pessoas é  4
// email enviado com sucesso luiza@example.com
//  sua posição é  3
//  A quantidade de pessoas é  4

const midias = ["youtube","instagram","facebook","linkedin"];
const meuArray = (item, index, array) => {
    console.log("todas as midias", item, index, array.length)
}
midias.forEach(meuArray);

// todas as midias youtube 0 4
// todas as midias instagram 1 4
// todas as midias facebook 2 4
// todas as midias linkedin 3 4


const people = ["Amelia","Alice","Ariane","Artur","Anderson"];
people.forEach((item, index, arrayDePessoas)=> {
    console.log("As pessoas com a letra a são : ", item);
    console.log("As pessoas com a letra A na posição : ", index);
})
// As pessoas com a letra a são :  Amelia
// As pessoas com a letra A na posição :  0
// [ 'Amelia', 'Alice', 'Ariane', 'Artur', 'Anderson' ]
// As pessoas com a letra a são :  Alice
// As pessoas com a letra A na posição :  1
// [ 'Amelia', 'Alice', 'Ariane', 'Artur', 'Anderson' ]
// As pessoas com a letra a são :  Ariane
// As pessoas com a letra A na posição :  2
// [ 'Amelia', 'Alice', 'Ariane', 'Artur', 'Anderson' ]
// As pessoas com a letra a são :  Artur
// As pessoas com a letra A na posição :  3
// [ 'Amelia', 'Alice', 'Ariane', 'Artur', 'Anderson' ]
// As pessoas com a letra a são :  Anderson
// As pessoas com a letra A na posição :  4
// [ 'Amelia', 'Alice', 'Ariane', 'Artur', 'Anderson' ]


const Mypeople = ["Pedro","Maria","Joao","Roberto","Juliane"];

function calback(value,index,array) {
    console.log("index", index);
    console.log("value", value);
    console.log("-----------------------------------------------");
};

Mypeople.forEach(calback);
// index 0
// value Pedro
// -----------------------------------------------
// index 1
// value Maria
// -----------------------------------------------
// index 2
// value Joao
// -----------------------------------------------
// index 3
// value Roberto
// -----------------------------------------------
// index 4
// value Juliane
// -----------------------------------------------

