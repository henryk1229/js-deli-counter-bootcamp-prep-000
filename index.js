function takeANumber(line, name) { line.push(`${name}`); return (`Welcome, ${name}. You are number ${line.length} in line.`) } 
function nowServing(line) { if (line.length === 0) { return "There is nobody waiting to be served!" } return `Currently serving ${line.shift()}.` } 
function currentLine(line) { if (line.length === 0) { return "The line is currently empty." } const namesandNumbers = []; for (let i = 0, l = line.length; i < l; i++) { namesandNumbers.push(`${line.length + 1}. ${line[i]}`) } return `The line is currently ${namesandNumbers[i].length + 1}. ${namesandNumbers[i]}` }