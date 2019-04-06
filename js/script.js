/* jshint esversion: 6 */


/*
The array of Quote Objects
*/
const quotes = [
	{
		quote : 'You will face many defeats in life, but never let yourself be defeated.',
		source : 'Maya Angelou',
		citation : '',
		year : null,
		tag : 'life',
	},
	{
		quote : 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
		source : 'Nelson Mandela',
		citation : '',
		year : 2001,
		tag : 'life',
	},
	{
		quote : "In the end, it's not the years in your life that count. It's the life in your years.",
		source : 'Abraham Lincoln',
		citation : '',
		year : null,
		tag : 'life',
	},
	{
		quote : 'Never let the fear of striking out keep you from playing the game.',
		source : 'Babe Ruth',
		citation : '',
		year : null,
		tag : 'life',
	},
	{
		quote : 'Life is either a daring adventure or nothing at all.',
		source : 'Hellen Keller',
		citation : 'Let Us Have Faith',
		year : 1940,
		tag : 'life',
	},
];
/*
this function creates a ranom number and then retrieves and returns a quote from the quote index of the random number
*/
function getRandomQuote () {
	'use strict';
	const randomIndex = Math.floor(Math.random() * Math.floor(quotes.length));
	const randomQuote = quotes[randomIndex];
	return randomQuote;
}

const quoteBox = document.querySelector('#quote-box');
/*
This function calls the random quote and then builds the html text useing the information on the quote object and then displays it
*/
function printQuote() {
	'use strict';
	const quoteToDisplay = getRandomQuote();
	let htmlString = '';
	htmlString += '<p class="quote">'+ quoteToDisplay.quote + '</p>';
	htmlString += '<p class="source">' + quoteToDisplay.source; 

	if (quoteToDisplay.citation) {
		htmlString += '<span class="citation">' + quoteToDisplay.citation + '</span>';
	}

	if (quoteToDisplay.year) {
		htmlString += '<span class="year">' + quoteToDisplay.year + '</span>';
	}
	
	if (quoteToDisplay.tag) {
		htmlString += '<span class="year">' + quoteToDisplay.tag + '</span>';
	}

	 htmlString += '</p>';
	 console.log(htmlString);

	 quoteBox.innerHTML = htmlString;
	
	randomBackground();
	randomTextColor();
	
}

/*
This will set up a time to change the quote every 20 seconds
*/
window.onload = setInterval(printQuote, 20000);

/*
Ths changes the background color to a random rgba value;
*/
const body = document.querySelector('body');
function randomBackground () {
	'use strict';
	body.style.backgroundColor = randomColor;
}

/*
this changes the text color to a random color;
*/
function randomTextColor () {
	'use strict';
	quoteBox.style.color = randomColor();
}

/*
this generates and returns a random color
*/
function randomColor () {
	'use strict';
	const r = Math.floor(Math.random() * Math.floor(255));
	const g = Math.floor(Math.random() * Math.floor(255));
	const b = Math.floor(Math.random() * Math.floor(255));
	const a = Math.random() * (1 - 0.3) + 0.3;
	console.log(a);
	return ('rgba('+r+','+g+','+b+','+a+')');
}

/*
linking up the button to the printQuote function
*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
