class Passenger {
  name: string;
  car: Car;
  constructor(name: string) {
    this.name = name;
    this.car = null;
  }

  putInCar(someone: Passenger) {
    console.log(`Trying to put in the car ${someone.name}`);
    if (this.car) {
      this.car.takePassenger(someone, this); //interact with other classes via mediator
    }
  }

  getOutCar(someone: Passenger) {
    console.log(`Trying to get out of the car ${someone.name}`);
    if (this.car) {
      this.car.dropOff(someone, this);
    }
  }
}

interface Passengers {
  [name: string]: Passenger;
}

class Car {
  //Mediator
  passengers: Passengers;
  constructor() {
    this.passengers = {};
  }

  registerPassenger(passenger: Passenger) {
    passenger.car = this;
    this.passengers[passenger.name] = passenger;
  }

  takePassenger(passenger: Passenger, who: Passenger) {
    if (!this.passengers[passenger.name]) {
      this.passengers[passenger.name] = passenger;
      console.log(`${who.name} puts ${passenger.name} in the car`);
    } else console.log(`${passenger.name} already in the car`);
  }

  dropOff(passenger: Passenger, who: Passenger) {
    if (this.passengers[passenger.name]) {
      delete this.passengers[passenger.name];
      console.log(`${who.name} drop off ${passenger.name}`);
    } else console.log(`${passenger.name} is not in the car`);
  }

  getPassengers() {
    console.log(this.passengers);
  }
}

const bob = new Passenger("Bob");
const kate = new Passenger("Kate");
const lilu = new Passenger("Lilu");
const car = new Car();
car.registerPassenger(bob);
car.registerPassenger(kate);
car.registerPassenger(lilu);
car.getPassengers();
bob.getOutCar(lilu);
car.getPassengers();
bob.putInCar(lilu);
car.getPassengers();
