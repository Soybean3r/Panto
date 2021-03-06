// Introduction
findID('main-text').innerHTML = 'Let\'s Play!'

create('button', 'play', 'canvas')

findID('play').value = 'Click to play!';
findID('play').addEventListener('click', () => {
  // delete this button
  findID('play').parentNode.removeChild(findID('play'));
  // direct player
  mainText.innerHTML = 'How Many Players?';
  //create a textbox for input
  create('textarea', 'text-input', 'canvas');
  findID('text-input').type = 'number';
  nmbButton();
});


//Create players
let createPlayers = function () {
  for (let i = 0; i < Game.playerCount; i++) {
    Game.players[i] = new Player();
  }
  // Ask for word input
  for (let player in Game.players) {

    mainText.innerHTML = `Player ${Number(player)+1}, enter single words for the game.`;
  }
  // Randomize word bank and player
  Game.rando(Game.wordBank);
  Game.rando(Game.wordBank);
  Game.rando(Game.players);
  Game.rando(Game.players);
}