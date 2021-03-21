/* For this project, you will build a message generator program. 
Every time a user runs a program, they should get a new, randomized output. 
You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. 
To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. 
Take what you know of JavaScript syntax so far to build the program and customize it to your liking.

Project Objectives:
Build a message generator program using JavaScript
Use Git version control
Use command line
Develop locally on your computer
*/ 

const quoteData = require('./quotedatabase.json').myObjects; // imports quote database object array created in a JSON
const pulledQuotes = []; // for storing the objects that are used in upcoming mixed message

const selectQuote = () => { // randomly picks a an object from QuoteData, stores that object in Pulled Quote, and returns the selected object
    const randomNum = Math.floor(Math.random()  * quoteData.length); 
    const selectedQuote = quoteData[randomNum];
    pulledQuotes.push(selectedQuote);
    return selectedQuote;
}

const splitIntoArray = inputObj =>{
    const splitString = inputObj.quote.split(" ");
    return splitString;  
}

const extractExcerpt = inputArray => {
    const startingPoint = Math.floor(Math.random() * inputArray.length);
    //console.log(startingPoint);
    const endingPoint = Math.floor(Math.random() * (inputArray.length-startingPoint+1) + startingPoint);
   // console.log(endingPoint);
    const excerpt = inputArray.slice(startingPoint, endingPoint)
    //console.log(excerpt.join(" "))
    return excerpt.join(" ");
}

const quoteConstructor = () =>{
    const amountOfExcerpts = Math.floor(Math.random()*6) +3;
    let finalQuote = "";
    // console.log(amountOfExcerpts);
    for (let i = 0; i < amountOfExcerpts; i++){
        finalQuote += ` ${extractExcerpt(splitIntoArray(selectQuote()))}`;
    }
    console.log(finalQuote);
    return finalQuote;
}

const constructedQuoteOrigins = () => {
    pulledQuotes.forEach(element => { console.log(`Quote: ${element.quote} - Quoted: ${element.quoted}`)    
    });
}

quoteConstructor();
constructedQuoteOrigins();