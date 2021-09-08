var myChild = "Alexis";
var gender = "male";

if (gender == "male") {
  console.log(myChild + "is my son");
} else {
  console.log(myChild + "is my daughter");
}

var prof = "instructor";
// var prof

if (prof === "instructor") {
  console.log(prof + "teaches students");
} else if (prof === "doctor") {
  console.log(prof + "treats people");
} else if (prof === "engineer") {
  console.log(prof + "fixes A/C");
} else {
  console.log("professions do not match");
}

//Logical AND
if (5 === 5 && 5 === 4) {
  console.log("Condition && is true");
} else {
  console.log("Condition && is false");
}

//Logical OR
if (5 === 5 || 5 === 4) {
  console.log("Condition || is true");
} else {
  console.log("Condition || is false");
}

//Logical NOT
if (!true) {
  console.log("Condition ! is true");
} else {
  console.log("Condition ! is false");
}
