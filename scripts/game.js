// Introduction
findID('main-text').innerHTML = 'Let\'s Play!'

create('button','play','canvas')

findID('play').value = 'Click to play!';
findID('play').addEventListener('click', ()=>{
  // delete this button
  findID('play').parentNode.removeChild( findID('play') );
  // direct player
  mainText.innerHTML = 'How Many Players?';
  //create a textbox for input
  create('textarea','text-input','canvas');
  findID('text-input').type = 'number';
  nmbButton();
});


