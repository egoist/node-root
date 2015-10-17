var root = require('./lib')
var should = require('should')
var path = require('path')

describe('root', () => {
  it('should return curent dir path', () => {
    root().should.equal(path.join(__dirname))
  })
})

