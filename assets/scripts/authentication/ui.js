'use strict'

const store = require('../store')
const gameLogic = require('../gameLogic')
const api = require('./api')
// const events = require('./events')

const onSignInSuccess = function (data) {
  $('#message').text('signed in successfully')
  store.user = data.user
  // console.log('store is ', store.user)
  $('#sign-in, #sign-up').hide()
  $('#message').removeClass('error').show()
  gameLogic.initGame()
  $('body').addClass('signed-in')
  const gameHistory = api.getGameApi()
}

const onSignInFailure = function (error) {
  $('#message').text('sign-in error')
  $('#message').addClass('error').show()

  console.error(error)
}

const onSignUpSuccess = function (data) {
  $('#message').text('Sign-up successfully')
  $('#message').removeClass('error').show()
}

const onSignUpFailure = function (error) {
  $('#message').text('Error on sign-up')
  $('#message').addClass('error').show()
  console.error(error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
  $('#message').removeClass('error').show()
  console.log('successfully changed password!!')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change-password')
  $('#message').addClass('error').show()
  console.log(error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').removeClass('error').show()
  store.user = null
  $('#sign-in, #sign-up, #change-password').show()
  $('#gameboard').remove()
  $('body').removeClass('signed-in')
  $('#playerStatusMessage').hide()

  console.log('successfully signed out')
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').addClass('error').show()

  console.log(error)
}

const onCreateGameSuccess = function (data) {
  store.game = {}
  $('.gameboard-wrapper').show()
  $('#playerStatusMessage').show()
  gameLogic.resetBoard()
  store.game.id = data.game.id
  store.game.xPlayer = data.game.player_x
  store.game.oPlayer = data.game.player_o
  store.game.over = data.game.over
  console.log(store.game)
}

const onCreateGameError = function (error) {
  console.log('cannot create game' + error)
}

const onUpdateSuccess = function () {
  console.log('game updated')
}

const onUpdateError = function () {
  console.log('game error')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  onCreateGameSuccess,
  onCreateGameError,
  onUpdateSuccess,
  onUpdateError
}
