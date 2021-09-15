function funcName() {
  console.log("Hello world!");
}
funcName();

function passExam(name, score) {
  const passUni = 71;
  const passColl = 51;

  if (score >= passUni) {
    console.log(`${name} has enrolled in university with score: ${score}`);
  } else if (score >= passColl) {
    console.log(`${name} has enrolled in collage with score: ${score}`);
  } else {
    console.log(`${name} has fail with score: ${score}`);
  }
}

function calcScore(score1, score2) {
  var totalScore = (score1 + score2) / 2;
  return totalScore;
}

passExam("John", calcScore(60, 99));
passExam("Mary", 65);
passExam("Bob", 45);

//-------------------------------------
// function statement

function add(x, y) {
  console.log("Function statement -add:", x + y);
}

add(5, 5);

//-------------------------------------
// function expression

var sum = function (a, b) {
  console.log("Function expression -sum:", a + b);
};
sum(10, 15);
