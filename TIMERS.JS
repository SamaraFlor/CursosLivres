//setTimeout e um callback e recebe função como parametro
console.log("antes o setTimeout ");



//e uma função assincrona pois espera os dois segundos
setTimeout(function(){
    console.log("testando o setTimeout ")

},2000);

console.log("depois o setTimeout ");


//setInteval- ele continua a cada 1 segundo
setInterval(function (){
    console.log("testando set Interval ")
},1000)