function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';

  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      result = 'You win!';
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      result = 'You lose!';
      break;
    default:
      result = 'It\'s a draw!';
      break;
  }

  document.getElementById('result').textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}
