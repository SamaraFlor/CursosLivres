function exibir(num) {
    console.log(num)
}


function soma(num1, num2, callback) {
    let op = num1 + num2;
    console.log(op);
};

function multiplicacao(num1, num2,callback) {
    let op = num1 * num2;
    console.log(op);
}

soma(21,43,exibir);

multiplicacao(10,87,exibir);