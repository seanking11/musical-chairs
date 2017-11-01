var totalChairs = 6
var amtOfPlayers = 6
// Start with 6 players

$(".btn").on("click", function() {
  generateState(amtOfPlayers)
})

function generateState(numOfPlayers) {
  var arrBools = [] // Initialize

  // Set all to false
  for(var i = 0; i < totalChairs; i++) {
    arrBools[i] = false
  }

  var count = 0

  while(count < numOfPlayers - 1) {
    var choice = getRandomInt(0, numOfPlayers - 1)

    if (arrBools[choice] === false) {
      arrBools[choice] = true
      count++
      console.log(choice, "setting true")
    } else {
      console.log(choice, "was false")
    }
  }

  console.log(arrBools)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
