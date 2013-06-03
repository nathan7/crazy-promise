var Promise = require('promise')
  , inherit = require('inherit')

module.exports = CrazyPromise
inherit(CrazyPromise, Promise)
function CrazyPromise(fn) {
  if (!(this instanceof CrazyPromise))
    return new CrazyPromise(fn)
  if (typeof fn !== 'function')
    throw new TypeError('fn is not a function')

  var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      fn(resolve, reject)
    }, Math.random() * 100)
  })

  this.then = promise.then
}

CrazyPromise.from = function(value) {
  return new Promise(function(resolve, reject) {
    resolve(value)
  })
}
