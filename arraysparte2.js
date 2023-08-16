const data = [
{name:"Alice", age:32, sallary:2000, driverLicense:true},
{name:"Carla", age:18, sallary:1500, driverLicense:false},
{name:"Aline", age:18, sallary:1200, driverLicense:false},
{name:"Maria", age:46, sallary:12000, driverLicense:true},
{name:"Luis", age:26, sallary:12000, driverLicense:true},
{name:"Luisa", age:15, sallary:0, driverLicense:false},
];

//reverse
const reverterDados = data.reverse();
console.log(reverterDados);

//find
const maiorSalario = 5000;
const FiltrandoSalarios = data.find((users) => users.sallary > maiorSalario);
console.log(FiltrandoSalarios);

const menorSalario = 1500;
const filtrandoMenorSalario = data.find((user) => user.sallary <= menorSalario);
console.log(filtrandoMenorSalario);

//findIndex- devolve o indice
const salarioMin = data.findIndex((user) => user.sallary > 0 &&
user.sallary <2000);

console.log(salarioMin);

data[salarioMin].sallary += 800;
console.log(data);


//includes - contem ou não um determinado item true or false
const numbers = [1,4,5,7,9,0,54];

const encontrarNumeros = numbers.includes(4);
console.log(encontrarNumeros);

//map - modificar um array, percorre e modifica individualmente
data.map((users) => users.newLetter = false);
console.log(data);

data.map((users)=> users.car = true);
console.log(data);

//filter- filtrar uma faixa de salario
// não precisa colocar true ou falso como é booleano ele já entende que e um true
const drivers = data.filter((users)=> users.driverLicense);
console.log('driver license');
console.log(drivers);

//reduce - 
// totalSalrio esta sendo criada totalmente por reduce
// 0 esta sendo usado pois como o totalSalario ainda não foi definido ele vai tentar soma algo que não foi definido
//ultiliza 0 mais o salario do usuario
const somaSalario = data.reduce((totalSalario, users)=> totalSalario += users.sallary, 0);
console.log(somaSalario);


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

//some - se estamos buscando algo devolve boolean
let verificarItemCar = data.some((users) => users.car);
console.log(verificarItemCar);


let verificarItemPassaporte = data.some((users) => users.passaporte);
console.log(verificarItemPassaporte);

data[0].passaporte = true;
let verificarItem = data.some((users) => users.passaporte);
console.log(verificarItem);

//every
const everyName = data.every((users) => users.name);
console.log("every name ", everyName);

const salarioBom= data.every((user)=>{
    return user.sallary >=1500 && user.car === true;
});
console.log('salario bom ', salarioBom);




