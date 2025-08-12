class Vehicle {
  // No explicit constructor is defined, JavaScript adds a default constructor
  helloPrint(){
        console.log("hello");
  }
 
}

const car = new Vehicle(); // The default constructor is called

car.helloPrint();
