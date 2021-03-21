
const quoteData = require('./quotedatabase.json').myObjects; // imports quote database object array created in a JSON
const pulledQuotes = []; // for storing the objects that are used in upcoming mixed message, can be retrieved later using constructedQuoteOrigins();

const selectQuote = () => { // randomly picks a an object from QuoteData, stores that object in Pulled Quote, and returns the selected object
    const randomNum = Math.floor(Math.random()  * quoteData.length); 
    const selectedQuote = quoteData[randomNum];
    pulledQuotes.push(selectedQuote);
    return selectedQuote;
}

const splitIntoArray = inputObj =>{ // splits quote into an array of words
    const splitString = inputObj.quote.split(" ");
    return splitString;  
}

const extractExcerpt = inputArray => { // takes a random length excerpt, minimum length of 1 element, joins it into a string and returns it.
    const startingPoint = Math.floor(Math.random() * inputArray.length);
    const endingPoint = Math.floor(Math.random() * (inputArray.length-startingPoint) + startingPoint + 1);
    const excerpt = inputArray.slice(startingPoint, endingPoint)
    return excerpt.join(" ");
}

const quoteConstructor = () =>{ // Uses above functions to concatinate together a random quote, running the extractExcerpt function a minimum of 3 times, up to an arbitrary limit
    const amountOfExcerpts = Math.floor(Math.random()*6) +3;
    let finalQuote = "";
    for (let i = 0; i < amountOfExcerpts; i++){
        finalQuote += ` ${extractExcerpt(splitIntoArray(selectQuote()))}`;
    }
    console.log(finalQuote);
    return finalQuote;
}

const constructedQuoteOrigins = () => { // allows you to see the quotes used in creating the new quote, and who said them. Displays them in order used. 
    pulledQuotes.forEach(element => { console.log(`Quote: ${element.quote} - Quoted: ${element.quoted}`)    
    });
}

quoteConstructor();
constructedQuoteOrigins();