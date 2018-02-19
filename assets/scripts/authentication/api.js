'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    success: function (data) {
      console.log(data.user.email)
      const playerNameEl = document.getElementById('playername')
      playerNameEl.textContent = data.user.email
    },
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGameApi = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGameApi = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    data,
    headers: {
      ContentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getGameData = function () {
  return $.ajax({
    url: config.apiOrigin + '/games?over=true',
    method: 'GET',
    dataType: 'json',
    headers: {
      ContentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    // the success function is a callback for when the request was successful
    success: function (data) {
      const gameData = JSON.stringify(data)
      const jsonGameData = JSON.parse(gameData)
      const playerGamesPlayedEl = document.getElementById('playergamesplayed')
      playerGamesPlayedEl.textContent = jsonGameData.games.length
      console.log(jsonGameData)
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createGameApi,
  updateGameApi,
  getGameData
}
