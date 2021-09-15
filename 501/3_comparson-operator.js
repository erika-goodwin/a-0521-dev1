var a = 5;
var b = 5;
console.log(a == b); //true
console.log(a === b); //true

var c = 5;
var d = 5;
console.log(a != b); //false
console.log(a !== b); //false

var e = 5;
var f = "5";
console.log("string vs number equality ==:", e == f); //true
console.log("string vs number equality ===:", e === f); //false
console.log(e != f); //false
console.log(e !== f); //false
