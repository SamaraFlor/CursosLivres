//parseFloat transaforma string em float, vendo o object number
console.log(Number.parseFloat('12.9999'));
// 12.9999

//parseInt- transaforma em inteiro
console.log(parseInt('12.9999'));
// 12

//toFixed determina numero de casas do numero
console.log(34.9000000.toFixed(4));
// 34.9000

//isNaN- verifica se não e numero
console.log(isNaN(54));
//fase é numero
console.log(isNaN('teste'));
// true não é numero

//assim ele converte pra numero e da false
console.log(isNaN(54));
//false pois converte para numero

//max value e min value- que js aceita fora disso trata como infinito
console.log(Number.MAX_VALUE);
// 1.7976931348623157e+308
console.log(Number.MIN_VALUE);
//5e-324
