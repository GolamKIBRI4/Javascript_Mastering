class Vehicle {
  constructor(name) {
    this.name = name;
  }

  drive() {
    console.log(`${this.name} is driving`);
  }
}

class Car extends Vehicle {
  constructor(name, model) {
    super(name);  // Calls parent constructor with `name`
    this.model = model;
  }

  drive() {
    super.drive();  // Calls the parent class method `drive()`
    console.log(`${this.name} (${this.model}) is driving`);
  }
}

const car = new Car('Toyota', 'Corolla');
car.drive();  
// Outputs:
// Toyota is driving
// Toyota (Corolla) is driving
