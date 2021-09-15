let globaVar = "hey";

function init() {
  var firstName = "harry";

  function sayFirstName() {
    console.log(firstName);
    console.log(globaVar);
  }
  sayFirstName();
}

init();
