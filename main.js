$(document).ready( function() {

  //variables

  var rock = $('#Rock')
  var paper = $('#Paper')
  var scissors = $('#Scissors')
  var userChoice
  var userScore
  var compScore
  var compChoice
  var draw
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
    //increment score??
    if compare = win, increment userScore ++1
    else increment compScore ++ 1
    })

  paper.on('click', function(){
    userChoice = 'Paper'
    compChoice = rPs[Math.floor(Math.random() * rPs.length)];
    console.log (userChoice)
    console.log (compChoice)
    var compare = evaluate()
    console.log(compare)
  })

  scissors.on('click', function(){
    userChoice = 'Scissors'
    compChoice = rPs[Math.floor(Math.random() * rPs.length)];
    console.log (userChoice)
    console.log (compChoice)
    var compare = evaluate()
    console.log(compare)
  })

  function evaluate() {
    if (userChoice === compChoice)
      return 'tie'

    switch(userChoice) {
      case 'Rock':
        return compChoice === 'paper' ? 'lose' : 'win'
      case 'Paper':
        return compChoice === 'scissors' ? 'lose' : 'win'
      case 'Scissors':
        return compChoice === 'rock' ? 'lose' : 'win'
      default:
        return
    }
  }

  
});
