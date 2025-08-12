class Vehicle{
    constructor(name){
        this.name=name;

    }
    drive(){
        console.log(`${this.name} is driving `);
    }
    stop(){
        console.log(`${this.name} is stopped `);
    }
}

class Cycle extends Vehicle{

    drive(){        //Method Override
        console.log(`${this.name} is riding `);
        this.stop(); //accessing parent class properties using this
    }
}

const Rider=new Cycle("cycle");

Rider.drive();
Rider.stop();