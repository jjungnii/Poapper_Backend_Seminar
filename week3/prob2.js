var express = require('express');
var server = express.createServer();

server.get('/', function (req, res) {
    res.render('index', {
	locals: {
	    operator: ''
	}
    });
});

server.get('/operator/num1/num2', function (req, res) {
    var word = corresponding_words[req.params.operator];
    var result = null;
    var num1 = parseFloat(req.params.num1);
    var num2 = parseFloat(req.params.num2);
    switch ( req.params.operator ) {
	case 'add':
	    result = num1 + num2;
	    break;
	case 'sub':
	    result = num1 - num2;
	    break;
	case 'mul':
	    result = num1 * num2;
	    break;
	case 'div':
	    result = num1 / num2;
	    break;
    }

    res.render('result', {
	locals: {
	    operator: ' :: ' + req.params.operator,
	    word: word,
	    num1: num1,
	    num2: num2,
	    result: result
	}
    });
});

server.listen(8080)

server.on('listening', () => {
    console.log("server is running on 8080 port.")
})

server.on('error', (error) => {
    console.log(error)
})