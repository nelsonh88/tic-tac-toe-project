'use strict'

const store = require('../store')

const onSignInSuccess = function (data) {
  $('#message').text('sign-in successfully')
  $('#message').css('background-color', 'green')
  store.user = data.user
  console.log('store is ', store.user)
}

const onSignInFailure = function (error) {
  $('#message').text('sign-in error')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const onSignUpSuccess = function (data) {
  $('#message').text('Sign-up successfully')
  $('#message').css('background-color', 'green')

  console.log('successfully signed up')
}

const onSignUpFailure = function (error) {
  $('#message').text('Error on sign-up')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', 'green')
  console.log('successfully changed password!!')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change-password')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  store.user = null
  console.log('successfully signed out')
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
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
