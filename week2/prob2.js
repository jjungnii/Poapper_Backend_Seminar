const fs = require('fs');

const textbook = {  
    title: 'Computer Systems',
    author: 'Randal E. Bryant'
};

const textbookJSON = JSON.stringify(textbook);

fs.writeFileSync('textbook.json', textbookJSON);

