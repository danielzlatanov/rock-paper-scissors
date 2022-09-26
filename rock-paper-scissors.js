//In order to run this game, type the following command in Shell: node rock-paper-scissors.js
function rockPaperScissors() {
	const rl = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	//node.js colour codes for colorizing the console messages without any modules.

	const colours = {
		reset: '\x1b[0m',
		bright: '\x1b[1m',
		dim: '\x1b[2m',
		underscore: '\x1b[4m',
		blink: '\x1b[5m',
		reverse: '\x1b[7m',
		hidden: '\x1b[8m',

		fg: {
			black: '\x1b[30m',
			red: '\x1b[31m',
			green: '\x1b[32m',
			yellow: '\x1b[33m',
			blue: '\x1b[34m',
			magenta: '\x1b[35m',
			cyan: '\x1b[36m',
			white: '\x1b[37m',
			crimson: '\x1b[38m',
		},
		bg: {
			black: '\x1b[40m',
			red: '\x1b[41m',
			green: '\x1b[42m',
			yellow: '\x1b[43m',
			blue: '\x1b[44m',
			magenta: '\x1b[45m',
			cyan: '\x1b[46m',
			white: '\x1b[47m',
			crimson: '\x1b[48m',
		},
	};

	const rock = 'rock';
	const paper = 'paper';
	const scissors = 'scissors';

	let recursiveReadLine = function () {
		let playerChoice;

		rl.question('Please choose rock, paper, or scissors: ', (input) => {
			playerChoice = input;

			if (playerChoice == 'r' || playerChoice == 'rock') {
				playerChoice = rock;
			} else if (playerChoice == 'p' || playerChoice == 'paper') {
				playerChoice = paper;
			} else if (playerChoice == 's' || playerChoice == 'scissors') {
				playerChoice = scissors;
			} else {
				console.log(
					colours.fg.black,
					colours.bg.red,
					'Your choice is invalid, please try again.',
					colours.reset
				);
				return rl.close();
			}

			let computerChoice = Math.floor(Math.random() * 3) + 1;

			//computerChoice returns a random number among 1, 2, and 3, which corresponds to rock, paper, or scissors;

			switch (computerChoice) {
				case 1:
					computerChoice = 'rock';
					break;
				case 2:
					computerChoice = 'paper';
					break;
				case 3:
					computerChoice = 'scissors';
					break;
			}

			// each scenario for all the possible moves when you can win, lose or draw the game.

			if (
				(playerChoice === 'rock' && computerChoice === 'scissors') ||
				(playerChoice === 'paper' && computerChoice === 'rock') ||
				(playerChoice === 'scissors' && computerChoice === 'paper')
			) {
				console.log(colours.fg.cyan, `You chose ${playerChoice}.`);
				console.log(colours.fg.cyan, `The computer chose ${computerChoice}.`);
				console.log(
					colours.fg.green,
					'You win! The computer is a loser.',
					colours.reset
				);
				recursiveReadLine();
			} else if (
				(playerChoice === 'scissors' && computerChoice === 'rock') ||
				(playerChoice === 'rock' && computerChoice === 'paper') ||
				(playerChoice === 'paper' && computerChoice === 'scissors')
			) {
				console.log(colours.fg.yellow, `You chose ${playerChoice}.`);
				console.log(colours.fg.yellow, `The computer chose ${computerChoice}.`);
				console.log(
					colours.fg.red,
					'You lose. Better luck next time!',
					colours.reset
				);
				recursiveReadLine();
			} else {
				console.log(colours.fg.blue, `You chose ${playerChoice}.`);
				console.log(colours.fg.blue, `The computer chose ${computerChoice}.`);
				console.log(colours.fg.magenta, 'This game is a draw!', colours.reset);
				recursiveReadLine();
			}
		});
	};
	recursiveReadLine();
}
rockPaperScissors();
