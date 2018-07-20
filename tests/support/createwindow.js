const jsdom = require('jsdom')
const { JSDOM } = jsdom
const { window } = new JSDOM()

intern.registerPlugin('createWindow', () => {
  return window
})