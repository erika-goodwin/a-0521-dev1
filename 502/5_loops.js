//FOR LOOP
var arr = ["John", "Nick", "Bob", "Mark"];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//WHILE LOOP
var counter = 0;
// while (counter <= 10) {
//   console.log(counter);
//   counter++;
// }

//DO WHILE
do {
  console.log("do-while:", arr[counter]);
  counter++;
} while (counter < arr.length);
