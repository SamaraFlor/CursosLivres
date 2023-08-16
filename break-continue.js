for (let index = 10; index > 0; index--) {
 console.log(index);

 if (index === 5) {
    break;
 }
}

console.log("break aqui");

let x = 10;

while (x < 100) {
    x += 10

    if (x === 60 || x === 90) {
        continue;
    }

    console.log("testando continue " + x);
    
}