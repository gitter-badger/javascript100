// var boundFn = fn.bind(that, 1, 2, 3)
// var returnValue = boundFn(4, 5, 6) 
// var returnValue = that.fn(1, 2, 3, 4, 5, 6)
Function.prototype.bind2 = function(that) {
  var fn = this
  var args = Array.prototype.slice.call(arguments, 1)
  return function boundFn() {
    var innerArgs = Array.prototype.slice.call(arguments)
    var returnValue = fn.apply(that, args.concat(innerArgs))
    return returnValue
  }
}

function fn() {
  console.log(this, arguments)
  var returnValue = true
  return returnValue
}

var that = {}
console.log(fn.bind2(that, 1, 2, 3)(4, 5, 6))