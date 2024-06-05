javascript:(function() {
  document.addEventListener("keypress", function (e) {
      if (e.key === 'q' || e.keyCode === 81) {
          e.preventDefault();
          document.querySelector('[data-functional-selector="answer-0"]').click();
      }
      if (e.key === 'a' || e.keyCode === 65) {
          e.preventDefault();
          document.querySelector('[data-functional-selector="answer-1"]').click();
      }
      if (e.key === 'w' || e.keyCode === 87) {
          e.preventDefault();
          document.querySelector('[data-functional-selector="answer-2"]').click();
      }
      if (e.key === 's' || e.keyCode === 83) {
          e.preventDefault();
          document.querySelector('[data-functional-selector="answer-3"]').click();
      }
  });
})();