
$(".btn").on("click", function() {
  generateState(5)
})

function generateState(numOfPlayers) {
  var arrBools = [] // Initialize

  // Set all to false
  for(var i = 0; i < numOfPlayers; i++) {
    arrBools[i] = false
  }

  var count = 0

  for(var i = 0; i < numOfPlayers; i++) {
    var choice = getRandomInt(0, numOfPlayers - 1)

    if (arrBools[choice] === false && count < numOfPlayers) {
      arrBools[choice] = true
      count++
    }

    console.log(choice)
  }

  console.log(arrBools)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/*
if (choice == 0 && count > numRounds - 1) {
  arrBools[i] = false
} else
*/

/*
for(var i = 0; i < numRounds - 1; i++) {
  var choice = Math.round(Math.random()) // 0 or 1

  if (choice == 1 && count < numRounds - 1) {
    count++
    arrBools[i] = true
    console.log('count', count)
    console.log('arrBools', arrBools)
  } else {
    arrBools[i] = false
    console.log('count', count)
    console.log('arrBools', arrBools)
  }
}
*/
