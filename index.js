'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')

// creating gameboard markup gameboard container
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
const xPlayer = 'X'
const oPlayer = 'O'
let currentPlayer = xPlayer
let squaresFilled = []
// process the click function
$('#gameboard > div').on('click', function (event) {
  // console.log(event.target)
  const square = event.target.id
  const squareTarget = '#' + square
  // determine if sqaure is empty
  const isValid = $(squareTarget).is(':empty')
  if (!isValid) {
    return
  }
// console.log(isValid)
  // turns ++ adds to the turns variable
  turns++
  $(squareTarget).html(currentPlayer)
  squaresFilled.push(currentPlayer)
  if (currentPlayer === xPlayer) {
    currentPlayer = oPlayer
  } else {
    currentPlayer = xPlayer
  }
  console.log(squaresFilled)
})
