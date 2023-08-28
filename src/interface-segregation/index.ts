import { FutureCar, Car, Airplane } from './VehicleGeneral';
import errorHandler from './utils/errorHandler';
//import { FutureCar, Car, Airplane } from './VehicleSegregation';

const futureCar = new FutureCar();
console.log(futureCar.drive());
console.log(futureCar.fly());

const car = new Car();
console.log(car.drive());

try {
    car.fly();
} catch (exception: unknown) {
    const message = errorHandler(exception);
    console.log(message);
}


const airplane = new Airplane();

try {
    airplane.drive();
} catch (exception: unknown) {
    const message = errorHandler(exception);
    console.log(message);
}

console.log(airplane.fly());


// interface segregation.

// const futureCar = new FutureCar();
// console.log(futureCar.drive());
// console.log(futureCar.fly());

// const car = new Car();
// console.log(car.drive());

// const airplane = new Airplane();
// console.log(airplane.fly());
