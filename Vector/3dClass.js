class Vector{
    constructor(components){
        if(!Array.isArray(components)){
            throw new Error("Invalid input: Expected an array");
        }
        this.components=components;
    }
add(some){
    if(this.components.length !== some.components.length){
        throw new Error("Incompatible vector dimensions");
    }
    let vector = (this.components.map((component, index) => component + some.components[index]));
    return vector;
}
subtract(some){
    if(this.components.length !== some.components.length){
        throw new Error("Incompatible vector dimensions");
    }
    let result = this.components.map((component,index)=>this.components[index]-some.components[index]);
    return result; 
}
scale(num){
    if(this.components.length === 0){
        throw new Error("Empty vector");
    }
    let result = this.components.map(component => component * num);
    return result;
}
dot(some){
    if(this.components.length !== some.components.length){
        throw new Error("Incompatible vector dimensions");
    }
    let result = this.components.reduce((acc,component,index)=> acc + component * some.components[index],0);
    return result;
}
    toString(){
        return `Vector(${this.components.join(", ")})`;
    }
}

let v1 = new Vector([1, 2]);
let v2 = new Vector([4, 5]);

let v3 = v1.add(v2); //array

console.log("Addition Result:", v3);  // return as array ,can be return as a Vector too
console.log(v2); // Vector { components: [ 4, 5 ] }
console.log(v2.components[0]); // Accessing the first component of the resulting vector
console.log("Subtraction Result:", v1.subtract(v2)); // return as array
console.log(" Pretty Print: ", v1.toString()); // Vector(1, 2)
console.log("Scaling Result:", v1.scale(2)); // return as array 
console.log("Dot Product Result:", v1.dot(v2)); // return as number
