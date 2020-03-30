let x = findID('canvas');

let create = (type, id, location) => {
  // Create an input element
  let element = document.createElement('input');
  // Assign attributes
  element.setAttribute('type', type);
  element.setAttribute('value', type);
  element.setAttribute('name', type);
  element.setAttribute('id', id)


  // Append to location
  findID(location).appendChild(element);
}

let nmbButton = function () {
  // Create button for player count submittion
  create('button', 'player-count', 'canvas');
  let pcButton = findID('player-count');
  let inputText = findID('text-input');
  pcButton.value = 'submit';
  pcButton.addEventListener('click', () => {
    Game.playerCount = parseInt(findID('text-input').value);
    pcButton.parentNode.removeChild(pcButton);
    inputText.value = '';
    if (typeof Game.playerCount !== 'number') {
      mainText.innerHTML = 'Please input a number.'
    } else {
      // Create 3 textboxes for player to submit 3 words
      // Create a button that inputs words to word bank
      create('textarea', 'word-1', 'word-1-space');
      create('textarea', 'word-2', 'word-2-space');
      create('textarea', 'word-3', 'word-3-space');
      findID('word-1').value = '';
      findID('word-2').value = '';
      findID('word-3').value = '';
      create('button', 'word-submit', 'canvas');
      findID('word-submit').value = 'submit';
      // Create Players
      for (let i = 0; i < Game.playerCount; i++) {
        Game.players[i] = new Player();
      }
      // Ask for word input
      for (let player in Game.players) {

        mainText.innerHTML = `\nPlayer ${Number(player)+1}, enter a single word ${i + 1}:\n`;
        wordInput = capitalize(wordInput);
        Game.wordBank.push(wordInput);
        Game.players[player].bank.push(wordInput);
      }
      Game.rando(Game.wordBank);
      Game.rando(Game.wordBank);
      Game.rando(Game.players);
      Game.rando(Game.players);
    }
  });
  inputText.value = 0;

}