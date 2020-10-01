const appel = require("./information.js");

var cowsay = require("cowsay");

console.log(cowsay.say({
	text:(`Hello i'm ${appel.name} from ${appel.campus}`),
	e: '0o0',
	T: "<==3",

}));
