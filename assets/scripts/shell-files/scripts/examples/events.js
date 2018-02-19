'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateExample = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onGetAll = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getAll(data)
    .then(ui.onGetAllSuccess)
    .catch(ui.onGetAllFailure)
  // console.log('onGetAll function good')
}

const addHandlers = () => {
  $('#example-create').on('submit', onCreateExample)
  $('#get-all').on('submit', onGetAll)
}
module.exports = {
  onCreateExample,
  onGetAll,
  addHandlers

}
