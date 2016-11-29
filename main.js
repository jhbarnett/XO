var express = require('express')
var app = express()
var port = 4000
app.listen(port)

var inquirer = require('inquirer')

greeting()



var board = [ '\n', '1', '2', '3', '\n', '4', '5', '6', '\n', '7', '8', '9', '\n']


function greeting(){
  inquirer.prompt({
    name: 'TicTacToeTime',
    message: 'Ready to Play?',
    validate: function(val){
      if (val.toLowerCase() === 'y'){
        drawBoard()
        makeMove()
      } 
    }
  })
}

function makeMove(){
  inquirer.prompt({
    name: 'PlayerMove',
    message: 'Enter Your Move: ,
    validate: function(val){
       
    }
  })
}

function drawBoard(){
  console.log(board.join('  '))
}