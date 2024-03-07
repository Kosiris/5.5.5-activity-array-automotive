//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class Car extends Vehicle {
    constructor(make, model, color, year, mileage, passengers, maxPassengers, numberOfWheels, maxSpeed, fuel, scheduleService){
        super(make, model, year, color, mileage)
        this.maxPassengers = maxPassengers;
        this.passengers = passengers;
        this.fuel = fuel;
        this.cheduleService = cheduleService;
        this.maxSpeed = maxSpeed;
        this.numberOfWheels = numberOfWheels;
    }
}

loadPassenger(num) {
    if (this.passengers < this.maxPassengers) {
        this.passengers = num;
        return this.passengers
    } else {
        console.log(`${this.make} ${this.model} is full.`)
    }
}
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


