let x = 5;
let y = 12;
const z = 22
console.log(z);
console.log(x);//escopo global

if (true) {
    let x = 20;
    console.log(x);// escopo local

    const z = 22;
    console.log(z);
};

console.log(x);// escopo global
console.log(z);