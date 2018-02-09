'use strict'

const onCreateSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')

  console.log('successfully created an example')
}

const onCreateFailure = function (error) {
  $('#message').text('Error on create example')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const onGetAllSuccess = function (data) {
  $('#message').text('Retrieved all examples!')
  $('#message').css('background-color', 'green')

  console.log('successfully got all examples')
}

const onGetAllFailure = function (error) {
  $('#message').text('Error on getting all examples')
  $('#message').css('background-color', 'red')
  console.error(error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onGetAllSuccess,
  onGetAllFailure
}
