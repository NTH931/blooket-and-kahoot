javascript:(function() {
  // Prompt user for characters
  const red = prompt("Enter a character for Red: ");
  const blue = prompt("Enter a character for Blue: ");
  const yellow = prompt("Enter a character for Yellow: ");
  const green = prompt("Enter a character for Green: ");

  // Function to get the key code for a given character
  function getKeyCode(character) {
      return character.charCodeAt(0);
  }

  // Map the entered characters to their respective key codes
  const keyMap = {
      [getKeyCode(red)]: 'answer-0',
      [getKeyCode(blue)]: 'answer-1',
      [getKeyCode(yellow)]: 'answer-2',
      [getKeyCode(green)]: 'answer-3'
  };

  document.addEventListener('keydown', e => {
      if (e.isComposing) return;

      const keyCode = e.key;
      if (keyMap[keyCode]) {
          document.querySelector(`[data-functional-selector="${keyMap[keyCode]}"]`).click();
      }
  });
})();