class Vector{
    constructor([x,y,z]){
        this.x=x;
        this.y=y;
        this.z=z;
    }
    add(some){
        return new Vector([this.x + some.x, this.y + some.y, this.z + some.z]);
    }
}


let v1 = new Vector([1, 2, 3]);
let v2 = new Vector([4, 5, 6]);

let v3 = v1.add(v2);
console.log("Addition Result:", v3);
console.log(v3.x);