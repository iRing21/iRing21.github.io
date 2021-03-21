# Project Objectives

 1. Build a message generator program using JavaScript
 2. Use Git version control
 3. Use command line
 4. Develop locally on your computer

### Instructions

For this project, you will build a message generator program. 
Every time a user runs a program, they should get a new, randomized output. 
You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. 
To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. 
Take what you know of JavaScript syntax so far to build the program and customize it to your liking.

Project Objectives:
Build a message generator program using JavaScript
Use Git version control
Use command line
Develop locally on your computer

#### Plans

    1. Implementing quote database to draw from
        +Array of objects, that include keys of 'quote' and 'quoted', in JSON.
    2. Constructing a 'mixed message' using quote database
        +Function to randomly select a portion of a quote from the database, minimum of one word long
        +Above function will determine quote length, randomly choosing a starting point and end point, ie if starting point is last word, just take that, otherwise pick random length less than quote length. 
        +Function to concatinate at least three, but up to 6 (arbitrary I know), instances of this. Storing it as an object with userName, the new quote, as well as the quotes/quoted people the quote was extracted from.
