//------------------------
//Constructor object
var person = new Object();
// var person = { };  <- the same as above

console.log(person); //{}

person.firstName = "john";
person.lastName = "doe";
console.log(person); //{firstName: 'john', lastName: 'doe'}

person["job"] = "doctor";
console.log(person); //{firstName: 'john', lastName: 'doe', job: 'doctor'}

person.son = new Object();
person.son.name = "Nick";
// Inside of person object, there is son object.
// son: {name: 'Nick'}

//------------------------
//Literal notation
var person1 = {
  firstName: "Jane",
  lastName: "Doe",
  age: 27,
  daughter: {
    name: "Mary",
    age: 5,
  },
  myFunc: function (daughterName, motherName) {
    console.log(`${daughterName}'s mother is ${motherName}`);
  },
};
console.log(person1);
console.log(person1.daughter.name); //Mary
person1.myFunc(person1.daughter.name, person1.firstName);
