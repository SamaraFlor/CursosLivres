//parseFloat transaforma string em floar, vendo o object number
console.log(Number.parseFloat('12.9999'));

//parseInt
console.log(parseInt('12.9999'));

//toFixed determina numero de casas do numero
console.log(34.9000000.toFixed(4));

//isNaN- verifica se não e numero
console.log(isNaN(54));
console.log(isNaN('teste'));
//assim ele converte pra numero e da false
console.log(isNaN(54));

//max value e min value- que js aceita fora disso trata como infinito
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
