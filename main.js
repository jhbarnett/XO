var express = require('express')
var app = express()
var port = 4000
app.listen(port)


drawBoard()



function makeMove(){}

function drawBoard(){
  var board = [
  ' 1 | 2 | 3 \n',
  '---|---|---\n',
  ' 4 | 5 | 6 \n',
  '---|---|---\n',
  ' 7 | 8 | 9 \n'
  ]
  console.log(board.join(''))
}