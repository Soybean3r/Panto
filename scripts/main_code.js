/*
Author: Joevany Martinez

+ implement Google Image API
+ Needs round 3 - Google Images API

*/

// wordBank stores words input by players
let Game = function(){
  this.numberOfGuesses = 0;
  this.selectedPlayer = 0;
  this.currentPlayer = 0;
  this.selectedWord = '';
}

//Game properties wont work with 'this'
Game.playerCount = Number(prompt('How many players?\n'));
Game.wordBank = [];
Game.usedWords =[];
Game.players = [];
Game.currentWord = 0;
Game.finishedGuessing = false;
Game.rando = function(arr){
  for(let i = arr.length - 1; i > 0; i--){
    let r = Math.floor(Math.random() * i);
    let temp = arr[i];
    arr[i] = arr[r];
    arr[r] = temp;
  }
  return arr;
}

let capitalize = function(str) {
    return str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }).trim();
};

let Player = function(){
  this.name = '';
  this.guessCount = 0;
  this.guessList = [];
  this.points = 0;
  this.bank = [];
}
///////////////////////////////////////////////////////////////////

// Create x Players
 function createPlayers (){
  for(let i = 0; i<Game.playerCount;i++) { Game.players[i] = new Player(); }

// loop for amount of players and inputs to wordBank
  for(let player in Game.players){
    console.clear();
    for(let i = 0; i < 3; i++){
      let wordInput = prompt(`\nPlayer ${Number(player)+1}, enter a single word ${i + 1}:\n`);
      wordInput = capitalize(wordInput);
      Game.wordBank.push(wordInput);
      Game.players[player].bank.push(wordInput);
    }
  }
  Game.rando(Game.wordBank);
  Game.rando(Game.wordBank);
  Game.rando(Game.players);
  Game.rando(Game.players);
}

createPlayers();
console.clear();

// Selection
let select = ()=> {
    // Game.selectedWord = Game.wordBank[Math.floor(Math.random() * Game.wordBank.length)]
    Game.selectedWord = Game.wordBank[Game.currentWord];
    Game.currentWord++;
    // Select a player from players object
    Game.selectedPlayer = Math.floor(Math.random() * Game.players.length) + 1;
    // push selected word into usedWords
    Game.usedWords.push(Game.selectedWord);
    // Warning for players
    prompt(`Player ${Game.selectedPlayer}, 
    Have everyone look away and Press Enter\n`);
}

// Gameplay
let play = ()=>{
  while(!Game.finishedGuessing){
    for(let player in Game.players){
      player = Number(player);

      let guess = prompt(`\nPlayer ${player +1}:\n`);
      guess = capitalize(guess)
      // increment guess count
      Game.players[player].guessCount++;
      Game.numberOfGuesses++;
      if(guess == Game.selectedWord || Game.numberOfGuesses > (Game.playerCount * 3)){
        Game.finishedGuessing = true;
        console.clear();
        console.log(`\nPlayer ${player +1} gets the point!\n`);
        Game.players[player].points++;
        break;
      }
    }
  }
}


while (Game.usedWords.length !== Game.wordBank.length){
// Sentence Round
  select();
  // console.log(Game.selectedWord,'\n', Game.usedWords,'\n');
// ask selected Player for a sentence
  let hint = prompt(`\nWrite a sentence to describe ${Game.selectedWord}!\n`);

// clear to hide dialog
  console.clear();
  console.log(hint);
// while loops lasts for one word
  play()
  Game.finishedGuessing = false;
}


// refresh Game
Game.currentWord = 0;
Game.rando(Game.wordBank);
Game.rando(Game.players);
Game.usedWords = [];

while (Game.usedWords.length !== Game.wordBank.length){
    select();
  // console.log(Game.selectedWord,'\n', Game.usedWords,'\n');
// ask selected Player for a sentence
  let hint = prompt(`\nWrite a seperate word to describe ${Game.selectedWord}!\n`);

// clear to hide dialog
  console.clear();
  console.log(hint);
// while loops lasts for one word
  play()
  Game.finishedGuessing = false;
}

// after game check
for(let player in Game.players){
  console.log(`${Number(player) + 1} has ${Game.players[player].points} points!\n`);
  console.log(Game.players[player])
}

// while (Game.usedWords !== Game.wordBank){
//   // roundThree();
// }

//


// Google Image API Round




// for(let player of Game.players){
//   console.log(player,'\n');
// }
// console.log(Game);
