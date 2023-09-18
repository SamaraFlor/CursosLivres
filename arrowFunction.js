const somar = function (max) {
    console.log(this)
};
console.log(somar(21));

// Object [global] {
//     global: [Circular *1],
//     queueMicrotask: [Function: queueMicrotask],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     structuredClone: [Function: structuredClone],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     atob: [Function: atob],
//     btoa: [Function: btoa],
//     performance: Performance {
//       nodeTiming: PerformanceNodeTiming {
//         name: 'node',
//         entryType: 'node',
//         startTime: 0,
//         duration: 37.64569999999367,
//         nodeStart: 2.411399999866262,
//         v8Start: 8.400599999818951,
//         bootstrapComplete: 27.250899999868125,
//         environment: 15.674699999857694,
//         loopStart: -1,
//         loopExit: -1,
//         idleTime: 0
//       },
//       timeOrigin: 1693222573377.011
//     },
//     fetch: [AsyncFunction: fetch]
//   }

const substr = function (max) {
    console.log(arguments);
};
console.log(substr(21));//[Arguments] { '0': 21 }

// ------------------ArrowFunction
const div = (max) => {
    console.log(this)// {} arraowfunction não tem escopo de this
    const arraydiv = [];
    for(let i=1;i<= max ;i++){
        arraydiv.push(i);
    }
      return arraydiv;
};
console.log(div(12))
// [
//     1,  2, 3, 4,  5,
//     6,  7, 8, 9, 10,
//    11, 12
//  ]


//function first class - consegue retornar na função uma função
// const contas = function (num1) {
//     return function (num2) {
//         return function (num3) {
//             return num1 + num2+ num3;
//         }
            
//         }
        
//     }
//     console.log(contas(2)(4)(6));//12

//com arrowFunction
const contas =  (num1) =>  (num2) =>  (num3) => num1 + num2+ num3;
console.log(contas(2)(4)(6));//12


console.log([2,3,4].map(value => value * 2));
// [ 4, 6, 8 ]

const map = (array, func) => {
    const result = [];
    for (let index = 0; index < array.length; index++) {
        result[index] = func(array[index])
    }
    return result;
}
console.log(map([2,3,4],value => value * 2));
// [ 4, 6, 8 ]

// recursividade ´pois uma esta chamando a outra
function fibonacci(n) {
    return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n -1) + fibonacci(n - 2)
}
console.log(fibonacci(7));//13