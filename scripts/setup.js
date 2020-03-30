let Game = function(){
  this.numberOfGuesses = 0;
  this.selectedPlayer = 0;
  this.currentPlayer = 0;
  this.selectedWord = '';
}

//Game properties wont work with 'this'
Game.playerCount = 0;
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

let Player = function(){
  this.name = '';
  this.guessCount = 0;
  this.guessList = [];
  this.points = 0;
  this.bank = [];
}


let findID = function(id){
  return document.getElementById(id)
}

let capitalize = function(str) {
    return str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }).trim();
};

let mainText = findID('main-text');