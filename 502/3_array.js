//-------------------------
//normal array
var arr = [
  "john",
  "bob",
  10,
  true,
  [1, 2, 3],
  function (name) {
    return `Hello ${name}`;
  },
];
console.log(arr);
console.log(arr[0]); //john
console.log(arr[4][2]); //3
console.log(arr[5]); //print out the function
console.log(arr[5]("Fran"));

//-------------------------
//array constructor
var arr1 = new Array(1, 2, "Paul", [2, 3, 4]);
console.log(arr1);

//-------------------------
//array methods
var color = ["red", "green", "blue"];
console.log(color); //['red', 'green', 'blue']
color[1] = "orange";
console.log(color); //['red', 'orange', 'blue']

color.push("yellow");
console.log(color); //['red', 'orange', 'blue', 'yellow']

color.pop("yellow");
console.log(color); // ['red', 'orange', 'blue']

var removed = color.pop();
console.log(removed); //blue

color.shift();
console.log(color);

// ????
console.log(color);
