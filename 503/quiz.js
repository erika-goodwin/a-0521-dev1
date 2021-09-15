var arrA = {
  name: "John",
  score1: 47,
  score2: 46,
};
var arrB = {
  name: "Bob",
  score1: 23,
  score2: 24,
};
var arrC = {
  name: "Nick",
  score1: 40,
  score2: 35,
};
var arrD = {
  name: "Alex",
  score1: 44,
  score2: 45,
};

//2
var passingLimit = [91, 81, 71, 61, 51];
var degree = ["A", "B", "C", "D", "E"];

//3
function valTotal(score1, score2) {
  total = score1 + score2;
  return total;
}

//4
function checkYourDegree(arrName) {
  var total = valTotal(arrName.score1, arrName.score2);
  if (total > passingLimit[0]) {
    console.log(
      `${arrName.name} is pass the test and got the degree ${degree[0]}.`
    );
  } else if (total >= passingLimit[1]) {
    console.log(
      `${arrName.name} is pass the test and got the degree ${degree[1]}.`
    );
  } else if (total >= passingLimit[2]) {
    console.log(
      `${arrName.name} is pass the test and got the degree ${degree[2]}.`
    );
  } else if (total >= passingLimit[3]) {
    console.log(
      `${arrName.name} is pass the test and got the degree ${degree[3]}.`
    );
  } else if (total >= passingLimit[4]) {
    console.log(
      `${arrName.name} is pass the test and got the degree ${degree[4]}.`
    );
  } else {
    console.log(`${arrName.name} couldn't pass the test. `);
  }
}

checkYourDegree(arrA); //John is pass the test and got the degree A.
checkYourDegree(arrB); //Bob couldn't pass the test.
checkYourDegree(arrC); //Nick is pass the test and got the degree C.
checkYourDegree(arrD); //Alex is pass the test and got the degree B.
