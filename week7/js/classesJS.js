///An empty object (“empty cabinet”) can be created using one of two syntaxes
/*
var user1 = new Object(); // "object constructor" syntax

var user = {}; // "object literal" syntax

// Literals and properties and methods
var user = {
	// an object
	name: "Salah",
	age: 29,
	// GETTERS
	get getName() {
		return this.name;
	},
	// SETTERS
	set setName(_name) { //changing the name of the current obj
		this.name = _name;
	}, // by key "age" store value 30

	// REGULAR METHOD
    //descriptionMethod() {} will not run b/c this is not a function 
    //^ can call this using user.descriptionMethod()
	describe: function descriptionMethod() { //even if u make this anonymous it will still work ~ describe: function() {...}
		console.log(`My name is ${this.name}, and my age is ${this.age}`); //backticks ~ another way to print
	},
};
//.(dot) is used to access
let myName = user.getName;
console.log(myName);
user.setName = "Tarandeep";
console.log(user.getName);

user.describe();
//console.log(user);
*/


/******************************************************************************* */
// declaring a class

// class Person{
//       constructor(name1, age1){
//           this.name=name1;
//           this.age= age1;
//       }
//       // getters
//       get getName(){
//         console.log(`The name is ${this.name}`);// backticks javascript
//       }

//       //setters
//       set setName(fullName){
//         const parts = fullName.split(' '); //returns an array 
//         this.name = parts[0];
//       } 
//       /*
//       ex.
//       let fullName = 'John Smith';
//       const (constant, once it is declared, value will not change)
//       const parts = fullName.split(' '); //returns ['John', 'Smith']
//       this.name = parts[0]; //accessing John which is at index 0
//       */
    
//       //Methods
//       multGradesBy2(grades){ 
//         //arrow fnc. format
//         //return grades.map(n => n * 2); //want to transfrom evry content to the content times 2

//         //another way 
//          let newOne = grades.map(function(n){
//             return n *2;
//         });
//         return newOne; 

//      }

// }

// var pers1 = new Person("Salah", 29); //create instance or object by calling the constructor
// var pers2 = new Person("Tarandeep", 21);

// console.log(pers1);
// console.log(pers2);



// pers1.getName;
// pers1.setName = "Tarandeep Shen";
// pers1.getName;
 
// let grArr = [1,2,3,4,5,6];
// var newGrade = pers1.multGradesBy2(grArr); //can also just pass in [1,2,3,4,5,6] instead of making grArr
// console.log(`The new Grades is ${newGrade}`);

 

/******************************************************************************* */
// static method
// it is a helper method and does not require an instance/object 
// define at the level of the class (i.e., a class-based method)

// class Person{
//     constructor(_name, _age){
//         this.name=_name;
//         this.age= _age;
//     }

//     static equals(inst1, inst2){ //helper/utility method, no need for the new keyword, will not be used in the object itself
//          let flag = ((inst1.name === inst2.name) && (inst1.age === inst2.age)) ? true : false; //(inst1 == inst2) gives false because they hve different memory addresses
//          return flag;
//     }
//     /* static equals(inst1, inst2) only envoked by the class name, not for class method */
// }

// let pers1 = new Person("Salah", 29);
// let pers2 = new Person("Salah", 29);
// //let pers2 = pers1; //if pers1 and pers2 are compared it will give true because they are referring to the same object
// let eql = Person.equals(pers1, pers2); //calling the method using the name of the class which is only unique to static methods
// console.log("eql =", eql);


/******************************************************************************* */
// extends and inheritance
// extnds keyword is used to acheive the concept of inhiertance in javascript
// It allows the new child class to inherit the properties and behaviour of the parent class

// class Person{ // parent class // generic
//     constructor(_name, _age){
//         this.name=_name;
//         this.age= _age;
//     }

//     describe(){
//         console.log(`My name is ${this.name}, and my age is ${this.age} years old`);
//     }
// }


// class Employee extends Person { // child extend parent

//     constructor(_name, _age, _empID){
//         super(_name, _age);// call the constructor of the parent class
//         //customize for student
//         this.emp_ID = _empID; //can use what the parent has + add more
//     }

//     isEvenEmpID(){ //a function that checks if the employee id is an even number and returns it if it is
//         return (this.emp_ID % 2) ===0; //this is accessing the ID of the object it is being called on 
//     }

// }

// let person1 = new Person("Salah", 29); //instantiating a new person

// let employee1 = new Employee("John", 54, 78458); //instantiating a new employee

// console.log(person1);

// console.log(employee1);

// person1.describe(); 
// employee1.describe(); //can use the method of the parent class

// console.log(employee1.isEvenEmpID()); 

//parent can not use a method created by the children class
//console.log(person1.isEvenEmpID());// gives error person1 is NOT an employee 


/******************************************************************************* */

// ********** Polymorphism *******************
// ********** is the act of redefining/overriding a method in the child that exists in the parent class ******************

class Person{ // parent class // generic
    constructor(_name, _age){
        this.name=_name;
        this.age= _age;
    }

    describe(){
        console.log(`My name is ${this.name}, and my age is ${this.age} years old`);
    }
}

class Employee extends Person {
    constructor(_name, _age, _empID){
        //super means im invoking the constructor of Person (parent class)
        super(_name, _age);// call the constructor of the parent class

        //customize for student
        this.emp_ID = _empID;
    }

    describe(){ //this overrides the describe method in the parent class
        console.log(`My name is ${this.name}, and my age is ${this.age} years old and my Employee ID is ${this.emp_ID}`);
    }
}

let person2= new Person("Salah", 29); //passing in value into the constructor of Person class
let employee2 = new Employee("Jina", 23, 5879); //passing in value into the constructor of Employee class

person2.describe(); //call the describe method in the person class
employee2.describe(); //calls the describe fnc. in the employee class (child) not the parent class

