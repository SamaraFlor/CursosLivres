const data = [
{name:"Alice", age:32, sallary:2000, driverLicense:true},
{name:"Carla", age:18, sallary:1500, driverLicense:false},
{name:"Aline", age:18, sallary:1200, driverLicense:false},
{name:"Maria", age:46, sallary:12000, driverLicense:true},
{name:"Luis", age:26, sallary:12000, driverLicense:true},
{name:"Luisa", age:15, sallary:0, driverLicense:false},
];

//reverse- pega o ultimo e deixa como o primeiro
const reverterDados = data.reverse();
console.log(reverterDados);
//   [
//     { name: 'Luisa', age: 15, sallary: 0, driverLicense: false },   
//     { name: 'Luis', age: 26, sallary: 12000, driverLicense: true }, 
//     { name: 'Maria', age: 46, sallary: 12000, driverLicense: true },
//     { name: 'Aline', age: 18, sallary: 1200, driverLicense: false },
//     { name: 'Carla', age: 18, sallary: 1500, driverLicense: false },
//     { name: 'Alice', age: 32, sallary: 2000, driverLicense: true }  
//   ]


//find- procura por quem ganha mais que 5000
const maiorSalario = 5000;
const FiltrandoSalarios = data.find((users) => users.sallary > maiorSalario);
console.log(FiltrandoSalarios);
// { name: 'Luis', age: 26, sallary: 12000, driverLicense: true }

//find- procura por quem ganha menos que 1500
const menorSalario = 1500;
const filtrandoMenorSalario = data.find((user) => user.sallary <= menorSalario);
console.log(filtrandoMenorSalario);
// { name: 'Luisa', age: 15, sallary: 0, driverLicense: false }

//findIndex- devolve o indice da busca no caso indice 3, maior que 0 e menor que 2000
//{name:"Aline", age:18, sallary:1200, driverLicense:false},
const salarioMin = data.findIndex((user) => user.sallary > 0 &&
user.sallary <2000);
console.log(salarioMin);
//3

// quem ganha menos que 2000 adicionou 800,00
data[salarioMin].sallary += 800;
console.log(data);
//  [
//     { name: 'Luisa', age: 15, sallary: 0, driverLicense: false },
//     { name: 'Luis', age: 26, sallary: 12000, driverLicense: true },
//     { name: 'Maria', age: 46, sallary: 12000, driverLicense: true },
//     { name: 'Aline', age: 18, sallary: 2000, driverLicense: false },
//     { name: 'Carla', age: 18, sallary: 1500, driverLicense: false },
//     { name: 'Alice', age: 32, sallary: 2000, driverLicense: true }
//   ]


//includes - contem ou não um determinado item true or false
const numbers = [1,4,5,7,9,0,54];
const encontrarNumeros = numbers.includes(4);
console.log(encontrarNumeros);
//true


//map - modificar um array, percorre e modifica individualmente
//adiconando newLetter = true para tds
data.map((users) => users.newLetter = false);
console.log(data);
// [
//     {
//       name: 'Luisa',
//       age: 15,
//       sallary: 0,
//       driverLicense: false,
//       newLetter: false
//     },
//     {
//       name: 'Luis',
//       age: 26,
//       sallary: 12000,
//       driverLicense: true,
//       newLetter: false
//     },
//     {
//       name: 'Maria',
//       age: 46,
//       sallary: 12000,
//       driverLicense: true,
//       newLetter: false
//     },
//     {
//       name: 'Aline',
//       age: 18,
//       sallary: 2000,
//       driverLicense: false,
//       newLetter: false
//     },
//     {
//       name: 'Carla',
//       age: 18,
//       sallary: 1500,
//       driverLicense: false,
//       newLetter: false
//     },
//     {
//       name: 'Alice',
//       age: 32,
//       sallary: 2000,
//       driverLicense: true,
//       newLetter: false
//     }
//   ]
///////////////////////////////////////////////////////

//adiconando car = true para tds
data.map((users)=> users.car = true);
console.log(data);
// [
//     {
//       name: 'Luisa',
//       age: 15,
//       sallary: 0,
//       driverLicense: false,
//       newLetter: false,
//       car: true
//     },
//     {
//       name: 'Luis',
//       age: 26,
//       sallary: 12000,
//       driverLicense: true,
//       newLetter: false,
//       car: true
//     },
//     {
//       name: 'Maria',
//       age: 46,
//       sallary: 12000,
//       driverLicense: true,
//       newLetter: false,
//       car: true
//     },
//     {
//       name: 'Aline',
//       age: 18,
//       sallary: 2000,
//       driverLicense: false,
//       newLetter: false,
//       car: true
//     },
//     {
//       name: 'Carla',
//       age: 18,
//       sallary: 1500,
//       driverLicense: false,
//       newLetter: false,
//       car: true
//     },
//     {
//       name: 'Alice',
//       age: 32,
//       sallary: 2000,
//       driverLicense: true,
//       newLetter: false,
//       car: true
//     }
//   ]


//filter- filtrar uma faixa de salario
// não precisa colocar true ou falso como é booleano ele já entende que e um true
const drivers = data.filter((users)=> users.driverLicense);
console.log('driver license');
console.log(drivers);
// driver license
// [
//   {
//     name: 'Luis',
//     age: 26,
//     sallary: 12000,
//     driverLicense: true,
//     newLetter: false,
//     car: true
//   },
//   {
//     name: 'Maria',
//     age: 46,
//     sallary: 12000,
//     driverLicense: true,
//     newLetter: false,
//     car: true
//   },
//   {
//     name: 'Alice',
//     age: 32,
//     sallary: 2000,
//     driverLicense: true,
//     newLetter: false,
//     car: true
//   }
// ]


//reduce - 
// totalSalrio esta sendo criada totalmente por reduce
// 0 esta sendo usado pois como o totalSalario ainda não foi definido ele vai tentar soma algo que não foi definido
//ultiliza 0 mais o salario do usuario
const somaSalario = data.reduce((totalSalario, users)=> totalSalario += users.sallary, 0);
console.log(somaSalario);
// 29500


//ForEach- definimos o que ele vai fazer
// const shoUsersName = (users)=>{
//     users.forEach(user => {
//         console.log(user.name);
//     });
// };
//  shoUsersName(data);

 const numeroSalarios = (users)=> {
    users.forEach(user => {
        if (user.driverLicense === true) {
           console.log( "recebeu vale combustivel  " + user.name, " salario   " + (user.sallary + 300.00));
        }else{
            console.log("não tem direito a vale combustive  " + user.name, "salario    " + user.sallary);
        }
    })
 }
numeroSalarios(data);

// não tem direito a vale combustive  Luisa salario    0
// recebeu vale combustivel  Luis  salario   12300
// recebeu vale combustivel  Maria  salario   12300
// não tem direito a vale combustive  Aline salario    2000
// não tem direito a vale combustive  Carla salario    1500
// recebeu vale combustivel  Alice  salario   2300

//some - se estamos buscando algo devolve boolean
let verificarItemCar = data.some((users) => users.car);
console.log(verificarItemCar);
// true


let verificarItemPassaporte = data.some((users) => users.passaporte);
console.log(verificarItemPassaporte);
//false



data[0].passaporte = true;
let verificarItem = data.some((users) => users.passaporte);
console.log(verificarItem);
//true

//every
const everyName = data.every((users) => users.name);
console.log("every name ", everyName);
// every name  true

const salarioBom= data.every((user)=>{
    return user.sallary >=1500 && user.car === true;
});
console.log('salario bom ', salarioBom);
// salario bom  false




