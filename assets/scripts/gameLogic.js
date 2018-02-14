'use strict'

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
let squaresPlayed = ['', '', '', '', '', '', '', '', '']
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
// made the whole gameLogic into a function so I can export it and require it
// in the ui file which is lready required in the index.js file
const initGame = function () {
  // created the gameboard using javascript
  const gameboard = document.createElement('div')
  gameboard.id = 'gameboard'
  document.getElementById('gamearea').appendChild(gameboard)

  // Create 9 cell grid for the gameboard and give it divs
  for (let i = 0; i < 9; i++) {
    const gameboardSquare = document.createElement('div')
    gameboardSquare.id = 'square' + i
    // console.log(gameboardSquare.id)
    document.getElementById('gameboard').appendChild(gameboardSquare)
    $('#gameboard').wrap("<div class='gameboard-wrapper'></div>")
  }
  // this will keep track how many turns have been taken this will be used to determine who goes first
  // because the first turn will always be x

  // making a playerStatusMessage variable so we can add notifications for the
  // users
  let playerStatusMessage
  // the function below allows me to updateStatusMessage for any particular
  // situation ie: who's player turn it is, loser, winner, tie notifications
  const updateStatusMessage = function (message) {
    playerStatusMessage = 'Player ' + currentPlayer + ', it is your turn'

    if (winner) {
      playerStatusMessage = 'Player ' + currentPlayer + ' is the WINNER!!!!!'
    } else if (turns === 9 && winner === false) {
      playerStatusMessage = 'There were no winners only LOSERS!! Game over!'
    }
    // .text is jquery method
    $('#playerStatusMessage').text(playerStatusMessage)
  }
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
      // by using jquery I am able to select the playerStatusMessage and set it
      // up so I can inform the users on invalid moves
      $('#playerStatusMessage').text('Player ' + currentPlayer + ', invalid move, try again')
      return
    }
    // console.log(isValid)

    // the .html writes the X or O on the grid
    $(squareTarget).html(currentPlayer)
    // squaresPlayed.push(currentPlayer
    // the above .push method for the array was not working
    squaresPlayed.splice(squareLocation, 1, currentPlayer)
    // console.log(squaresPlayed)
    // turns ++ adds to the turns variable
    turns++
    // start checking for winner once turns hit 3 or more
    if (turns >= 5) {
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
            updateStatusMessage()
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
      $('#playerStatusMessage').text('LOSERS!! Game over!')

      return
    }
    if (!winner) {
      if (currentPlayer === xPlayer) {
        currentPlayer = oPlayer
        updateStatusMessage()
      } else {
        currentPlayer = xPlayer
        updateStatusMessage()
      }
    }
    // console.log(squaresPlayed)
  })
}

const resetBoard = function () {
  // all of the variables below will get reset to how it started
  turns = 0
  winner = false
  currentPlayer = xPlayer
  squaresPlayed = ['', '', '', '', '', '', '', '', '']
  $('#gameboard > div').empty()
  $('#playerStatusMessage').text('Player X, it is your turn')
}

module.exports = {
  initGame,
  resetBoard
}
