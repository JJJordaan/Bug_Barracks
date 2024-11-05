//mass data classes:
// class Person{
//     constructor(name, age, role){
//         this.name = name;
//         this.age = age;
//         this.role = role;
//     }
// }
//     greet() {
//         console.log(`Hello ${this.name}, you are ${this.age}, years old and you are a ${this.role}`);
//     }

// class student extends Person{
// constructor (name, age){
//     super(name,age);
//     this.role = "student";
// }
// }

// class Teacher extends Person{
// constructor(name, age){
//     super(name,age);
//     this.role = "teacher"
// }
// }

// let student1 = new student("Johnyboy", 12);
// let student2 = new student("Sally", 14);
// let teacher1 = new Teacher("Lorrie", 885);
// student1.greet();
// student2.greet();
// Teacher1.greet();


//MINE

class Knife{
constructor(sharpness,length,width,thick,handle){  //this is a template object
    //constant values at top
    this.sharpness = sharpness;
    this.length = length;
    this.width = width;
    this.thick = thick;

    //changing values at bottom
    this.handle = handle;
}


classify() {
    console.log(`This knife is ${this.sharpness} sharp, it has a ${this.handle} handle, it is ${this.length}cm long, ${this.width}cm wide, ${this.thick}cm thick`);
}}

class ButterflyKnife extends Knife{  //Provides properties to use in constructor
constructor(sharpness,length,width,thick){  
    //Constructs variables/properties within the class and replaces their values within the {}

super(sharpness,length,width,thick);        
    //'super' and 'extends' enables the constructor to reach through the class and use the template class's properties. (they're still empty parameters)             

this.handle = "Split";  //'this.TemplateProperty'
} }

class SteakKnife extends Knife{
constructor(sharpness,length,width,thick){
super(sharpness,length,width,thick);
this.handle = "Single";
} }

let butterflyKnife = new ButterflyKnife(300, 10, 4, 2); //
butterflyKnife.classify();
let steakKnife = new SteakKnife(150, 8, 2, 1);
steakKnife.classify();