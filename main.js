$(document).ready( function() {

  //variables
  var rock = $('#Rock')
  var paper = $('#Paper')
  var scissors = $('#Scissors')
  var userChoice
  var userScore = 0
  var compScore = 0
  var compChoice
  var draw = 0
  var compare
  var rPs = ['Rock', 'Paper', 'Scissors']

  //Functions
  rock.on('click', function() {
    userChoice = 'Rock'
    compChoice = rPs[Math.floor(Math.random() * rPs.length)];
    console.log (userChoice)
    console.log (compChoice)
    var compare = evaluate()
    console.log(compare)
    alert('You chose ' + userChoice + ' And The Computer Chose: ' + compChoice + '.')
    //debugger
    if (compare = 'Win') {
      userScore += 1
    } else {
        compScore += 1
    }
    })

  paper.on('click', function(){
    userChoice = 'Paper'
    compChoice = rPs[Math.floor(Math.random() * rPs.length)];
    console.log (userChoice)
    console.log (compChoice)
    var compare = evaluate()
    console.log(compare)
    alert('You chose ' + userChoice + ' And The Computer Chose: ' + compChoice + '.')
    if (compare = 'Win') {
      userScore += 1
    } else {
        compScore += 1
    }
  })

  scissors.on('click', function(){
    userChoice = 'Scissors'
    compChoice = rPs[Math.floor(Math.random() * rPs.length)];
    console.log (userChoice)
    console.log (compChoice)
    var compare = evaluate()
    console.log(compare)
    alert('You chose ' + userChoice + ' And The Computer Chose: ' + compChoice + '.')
    if (compare = 'Win') {
      userScore += 1
    } else {
        compScore += 1
    }
  })

  function evaluate() {
    if (userChoice === compChoice)
      return 'tie'
      draw += 1 

    switch(userChoice) {
      case 'Rock':
        return compChoice === 'paper' ? 'Lose' : 'Win'
      case 'Paper':
        return compChoice === 'scissors' ? 'Lose' : 'Win'
      case 'Scissors':
        return compChoice === 'rock' ? 'Lose' : 'Win'
      default:
        return
    }
  }

  document.getElementById('userScore').innerHTML = "Player 1: " + userScore
  document.getElementById('compScore').innerHTML = "Computer: " + compScore
  document.getElementById('draw').innerHTML = "Draws: " + draw
  
});
