class StaticTest{
    static staticCounter=0;

    static Counter(){
        StaticTest.staticCounter++;
    }

}


StaticTest.Counter();
StaticTest.Counter();
//To access static properties we do not need the instance of the class

console.log(StaticTest.staticCounter);