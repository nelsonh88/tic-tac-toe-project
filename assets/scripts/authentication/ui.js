'use strict'

const store = require('../store')
const gameLogic = require('../gameLogic')

const onSignInSuccess = function (data) {
  $('#message').text('signed in successfully')
  store.user = data.user
  // console.log('store is ', store.user)
  $('#sign-in, #sign-up, #change-password').hide()
  $('#message').removeClass('error').show()
  gameLogic.initGame()
  $('#playerStatusMessage').show()
  $('body').addClass('signed-in')
}

const onSignInFailure = function (error) {
  $('#message').text('sign-in error')
  $('#message').addClass('error').show()

  console.error(error)
}

const onSignUpSuccess = function (data) {
  $('#message').text('Sign-up successfully')
  $('#message').removeClass('error').show()
  console.log('successfully signed up')
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

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
