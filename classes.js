class Car{
    constructor(brand,name){
        this.brand = brand;
        this.name = name;
    }
    get fullname(){
        return `Brand: ${this.brand}  e ${this.name}`;
    }

    static buzina(){
        return 'buzz!'
    }

    brake(){
        return `Brand: ${this.fullname}`;
   }
}

const car = new Car('vw', 'Gol');
console.log(car.brake());//Brand: vw  e Gol
//metodo estatico fica dentro da propria classe Car
console.log(Car.buzina())


// herda metodos da classe que extend
class MultiCar extends Car{
    playSong(song){
        return  `Play: ${song} e ${this.fullname}`;
    }
}

const car2 = new MultiCar("vw", "mercedez");
console.log(car2.playSong("metalica"));
// Play: metalica e Brand: vw  e mercedez

