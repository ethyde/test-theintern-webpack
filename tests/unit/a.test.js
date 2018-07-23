/* global intern */
const { window } = intern.getPlugin('createWindow')
const { registerSuite } = intern.getPlugin('interface.object')
const { assert } = intern.getPlugin('chai')

global.window = window

const something = require('../../app/a')

registerSuite('Test', {
  'something' () {
    assert.typeOf(something, 'object')
  }
})