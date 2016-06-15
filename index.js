'use strict'

const repl = require('repl')
const replServer = repl.start()
const cb = (answer) => {
	switch (answer.toLowerCase()) {
		case 'poke':
		case 'poke alex':
		case 'poke alex in the eye':
			console.log('You poke Alex.')
			break;
		case 'look':
			console.log('You see Alex.')
			break;
		default:
			console.log(`I do not understand "${answer.replace(/alex/, '').trim()}"`)
	}

	replServer.question('> ', cb)
}

// Start this incredible text adventure
console.log('You see Alex.')
replServer.question('> ', cb)
