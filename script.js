$(document).ready(function(){
  console.log("hello world")
})

var ul = $('ul')

var liTags = $('li')
console.log(liTags)

var red = $('#red')
console.log(red)

var liClassBlack = $('.black')
console.log(liClassBlack)

var firstBlackLi = $('.black').eq(0)
console.log(firstBlackLi)

var lastBlackLi = $('.black:last-of-type')
console.log(lastBlackLi)
