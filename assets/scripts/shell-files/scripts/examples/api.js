'use strict'

const config = require('../config')
const store = require('../store')

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/examples',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getAll = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/examples',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token='

    },
    data: data
  })
}
module.exports = {
  create,
  getAll

}
