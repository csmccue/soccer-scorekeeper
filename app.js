// import functions and grab DOM elements
import { renderGame } from './render-utils.js';
const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');

const nameFormButton = document.getElementById('name-form-button');
const teamOneAddButton = document.getElementById('team-one-add-button');
const teamTwoAddButton = document.getElementById('team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const finishGameButton = document.getElementById('finish-game-button');

const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');

const teamOneScore = document.getElementById('team-one-score');
const teamTwoScore = document.getElementById('team-two-score');

const teamOneInputEl = document.getElementById('team-one');
const teamTwoInputEl = document.getElementById('team-two');

// let state

let name1 = '';
let name2 = '';
let score1 = 0;
let score2 = 0;
let pastGames = [];

nameFormButton.addEventListener('click', () => {
    // get the name data from the form
    const nameOne = teamOneInputEl.value;
    const nameTwo = teamTwoInputEl.value;
    // set the state to this data from the form
    name1 = nameOne;
    name2 = nameTwo;
    // reset the form values
    teamOneInputEl.value = '';
    teamTwoInputEl.value = '';
    // refresh the current game element with new data by calling the appropriate function
    refreshCurrentGameEl();
});


teamOneAddButton.addEventListener('click', () => {
    // increment the current state for team one's score
    score1++;
    // refresh the current game element with new data by calling the appropriate function
    refreshCurrentGameEl();
});

teamTwoAddButton.addEventListener('click', () => {
    // increment the current state for team two's score
    score2++;
    // refresh the current game element with new data by calling the appropriate function
    refreshCurrentGameEl();
});

teamOneSubtractButton.addEventListener('click', () => {
    // decrement the current state for team one's score
    score1--;
    // refresh the current game element with new data by calling the appropriate function
    refreshCurrentGameEl();
});

teamTwoSubtractButton.addEventListener('click', () => {
    // decrement the current state for team two's score
    score2--;
    // refresh the current game element with new data by calling the appropriate function
    refreshCurrentGameEl();
});

finishGameButton.addEventListener('click', () => {
    const newGame = {
        name1: name1,
        name2: name2,
        score1: score1, 
        score2: score2,
    };
    pastGames.push(newGame);
    pastGames.textContent = '';
    for (let game of pastGames) {
        const gameEl = renderGame(game.name1, game.name2, game.score1, game.score2);
        pastGamesEl.push(gameEl);
    }
    // add the current game to an array of games in state
    // it will be helpful to keep track of these games as objects with 4 properties, one for each piece of state we're tracking
    // for example, make an object like this: { name1: 'ducks', name2: 'bears' ,score1: 1, score2: 2 } 

    // then push it to your array in state
    // (be sure to make a new object. do not declare the object in global scope and mutate it for reuse. This would cause difficult bugs)
    


    // reset the state to zero and empty strings
    currentGameEl = '';
    let name1 = '';
    let name2 = '';
    let score1 = 0; 
    let score2 = 0;
    // refresh the current game element with new data by calling the appropriate function
    displayAllGames();
});

function refreshCurrentGameEl() {
    currentGameEl.textContent = '';

    teamOneLabel.textContent = name1;
    teamTwoLabel.textContent = name2;
    teamOneScore.textContent = score1;
    teamTwoScore.textContent = score2;

    // const gameEl = . . . 
    // make a new gameEl here by calling renderGame with the approriate arguments.
    const gameEl = renderGame(name1, name2, score1, score2); 
    // Check the renderGame function declaration in render-utils.js to figure out the correct arguments to pass to this function 
    // In render-utils.js as yourself: How many arguments does the function take? What order does it take them in?
    
    gameEl.classList.add('current');

    currentGameEl.append(gameEl);
}


function displayAllGames() {
    // clear out the past games list in the DOM
    currentGameEl.textContent = '';
    // loop through the past games in state
    for (let game of pastGames) {
        const gameEl = renderGame(game.name1, game.name2, game.score1, game.score2);
        pastGamesEl.append(gameEl);
    } 
    // use the renderGame function to render and append a past game for each past game in state
    // again, review the renderGame function in render-utils.js. How many arguments does it take? What order does it take them in?
}
