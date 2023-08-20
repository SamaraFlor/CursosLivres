for (let index = 10; index > 0; index--) {
 console.log(index);
//10
// 9
// 8
// 7
// 6
// 5

 if (index === 5) {
    break;
 }
}

console.log("break aqui");
//break aqui


let x = 10;

while (x < 100) {
    x += 10

    if (x === 60 || x === 90) {
        continue;
    }

    console.log("testando continue " + x);
     //  testando continue 20
    // testando continue 30
    // testando continue 40
    // testando continue 50
    // testando continue 70
    // testando continue 80
    // testando continue 100
    
};



