class Shape{

    area(){
        console.log("This is Shape area");
    }
    isShape(){
        console.log("This is Shape");
    }
}

class Circle extends Shape{
    area(){
           console.log("This is Circle area");
    
    }
}

class Rectangle extends Shape{
    
    area(){
        
        console.log("This is Rectangle area");
    
    }
}


const area = [new Circle(),new Rectangle()];

area.map(ar=>ar.area());