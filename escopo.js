let x = 5;
let y = 12;
const z = 22
console.log(z);
console.log(x);//escopo global
//22
//5

if (true) {
    let x = 20;
    console.log(x);// escopo local
    //20

    const z = 22;
    console.log(z);
    //22
};

console.log(x);// escopo global
console.log(z);
//5
//22
