class GetterSetter{

    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name){
        const arr=name.split(" ");
        this.firstName=arr[0];
        this.lastName=arr[1];

    }

}

const person=new GetterSetter("Bushra","Khan");

console.log(person.fullName);

person.fullName="Bushra Emon";

console.log(person.fullName);

