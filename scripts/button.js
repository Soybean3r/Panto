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

    //self delete
    pcButton.parentNode.removeChild(pcButton);
    inputText.parentNode.removeChild(inputText);

    if (typeof Game.playerCount !== 'number') {
      mainText.innerHTML = 'Please input a number.'
    } else {
      // Create 3 textboxes for player to submit 3 words
      // Create a button that inputs words to word bank
      create('textarea', 'word-1', 'word-1-space');
      create('textarea', 'word-2', 'word-2-space');
      create('textarea', 'word-3', 'word-3-space');

      findID('word-1-space').innerHTML = 'Word 1 - ' + findID('word-1-space').innerHTML;
      findID('word-1').value = '';

      findID('word-2-space').innerHTML = 'Word 2 - ' + findID('word-2-space').innerHTML;
      findID('word-2').value = '';

      findID('word-3-space').innerHTML = 'Word 3 - ' + findID('word-3-space').innerHTML;
      findID('word-3').value = '';

      create('button', 'word-submit', 'canvas');
      findID('word-submit').value = 'submit';

      findID('word-submit').addEventListener('click', () => {
        for (let i = 0; i < 3; i++) {
          Game.wordBank.push(findID(`word-${i+1}`).value)
        }
        findID('word-1').value = '';
        findID('word-2').value = '';
        findID('word-3').value = '';
      });
      // Create Players
      createPlayers();
    }
  });
  inputText.value = 0;
}