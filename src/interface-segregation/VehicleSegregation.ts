interface CarInterface {
    drive(): string;
}

interface AirplaneInterface {
    fly(): string;
}

export class FutureCar implements CarInterface, AirplaneInterface {
    public drive() {
        return 'Driving Car.';
    }

    public fly() {
        return 'Flying Car.';
    }
}

export class Car implements CarInterface {
    public drive() {
        return 'Driving Car.';
    }
}

export class Airplane implements AirplaneInterface {
    public fly() {
        return 'Flying Airplane.';
    }
}
