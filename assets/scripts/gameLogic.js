'use strict'

const gameboard = document.createElement('div')
gameboard.id = 'gameboard'
// gameboard.innerHTML = 'Hello World!'
document.body.appendChild(gameboard)

// Create 9 cell grid for the gameboard and give it divs
for (let i = 0; i < 9; i++) {
  const gameboardSquare = document.createElement('div')
  gameboardSquare.id = 'square' + i
  // console.log(gameboardSquare.id)
  document.getElementById('gameboard').appendChild(gameboardSquare)
}
// this will keep track how many turns have been taken this will be used to determine who goes first
// because the first turn will always be x
let turns = 0
// set winner false by default because no one won yet at the start of the game
let winner = false
// xPlayer will put down a X on the board
const xPlayer = 'X'
// oPlayer will put down a O on the board
const oPlayer = 'O'
// the first player is assumed to be X therefore currentPlayer will start as xPlayer
let currentPlayer = xPlayer
// empty array that I am going to push the X's and O's into the proper indeces
const squaresPlayed = ['', '', '', '', '', '', '', '', '']
// this array of objects are the winning combos according to the div ids
const winningCombos = [
  {
    spot1: 0,
    spot2: 1,
    spot3: 2
  },
  {
    spot1: 3,
    spot2: 4,
    spot3: 5
  },
  {
    spot1: 6,
    spot2: 7,
    spot3: 8
  },
  {
    spot1: 0,
    spot2: 3,
    spot3: 6
  },
  {
    spot1: 1,
    spot2: 4,
    spot3: 7
  },
  {
    spot1: 2,
    spot2: 5,
    spot3: 8
  },
  {
    spot1: 0,
    spot2: 4,
    spot3: 8
  },
  {
    spot1: 2,
    spot2: 4,
    spot3: 6
  }
]

// process the click function
$('#gameboard > div').on('click', function (event) {
  // this statement below stops the clicker from clicking once a winner wins
  // before I did this it kept on looping over and letting a player continue
  // to click even after a winner was declared
  if (winner) {
    return
  }
  // console.log(event.target)
  const square = event.target.id
  // square.match is a regular expression to extract the number from the string similar to what
  // we did in the normalized word lab
  // ie square1 it will extract the number 1(\d is for digits) and /g is so it wont stop in the first occurance
  // but technically I don't need the g since there wont be another instance of a digit ie square12
  const squareLocation = square.match(/\d+/g)
  const squareTarget = '#' + square
  // determine if sqaure is empty
  const isValid = $(squareTarget).is(':empty')
  if (!isValid) {
    return
  }
  // console.log(isValid)

  // the .html writes the X or O on the grid
  $(squareTarget).html(currentPlayer)
  // squaresPlayed.push(currentPlayer)
  // the above .push method for the array was not working
  squaresPlayed.splice(squareLocation, 1, currentPlayer)
  // console.log(squaresPlayed)
  // turns ++ adds to the turns variable
  turns++
  // start checking for winner once turns hit 3 or more
  if (turns >= 3) {
    // loop through the winning combos array and check winning numbers
    for (let combo = 0; combo < winningCombos.length; combo++) {
      // console.log(winningCombos[combo])
      // get the values of the winning combinations from the winning combos array
      const spot1 = winningCombos[combo].spot1
      const spot2 = winningCombos[combo].spot2
      const spot3 = winningCombos[combo].spot3
      // console.log('spot1: ' + spot1 + ' / spot2: ' + spot2 + ' / spot3: ' + spot3)
      // get the values in the squaresPlayed array using the values from the winning combinations
      const square1 = squaresPlayed[spot1]
      const square2 = squaresPlayed[spot2]
      const square3 = squaresPlayed[spot3]
      // console.log('square1: ' + square1 + ' / square2: ' + square2 + ' / square3: ' + square3)
      // first check if the squares played array items are not empty
      if (square1 !== '' && square2 !== '' && square3 !== '') {
        // console.log(turns)
        // now compare the squares played array items to see if they are the same value
        if (square1 === square2 && square2 === square3) {
          console.log('winner!!')
          winner = true
          break
        }
        // if (turns === 9) {
        //   // this means that there was no winner
        //   console.log('there was no winner only losers')
        //
        // }
      }
    }
  }
  // if it turns has reached 9 turns and there is no winner than you both are losers!!!!
  if (turns === 9 && winner === false) {
    console.log('losers')
    return
  }
  if (currentPlayer === xPlayer) {
    currentPlayer = oPlayer
  } else {
    currentPlayer = xPlayer
  }
  // console.log(squaresPlayed)
})
