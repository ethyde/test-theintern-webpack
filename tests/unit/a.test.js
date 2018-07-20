import something from "../../app/a"

/* global intern */
const { window } = intern.getPlugin('createWindow')
const { registerSuite } = intern.getPlugin('interface.object')
const { assert } = intern.getPlugin('chai')

registerSuite('Test', {
  'something' () {
    assert.typeOf(something, 'string')
  }
})