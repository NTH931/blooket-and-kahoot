javascript:(function() {
document.addEventListener('keydown', e => {
    if (e.key == 'q') {
        document.querySelector('[data-functional-selector="answer-0"]').click();
    }
    if (e.key == 'a') {
        document.querySelector('[data-functional-selector="answer-1"]').click();
    }
    if (e.key == 'w') {
        document.querySelector('[data-functional-selector="answer-2"]').click();
    }
    if (e.key == 's') {
        document.querySelector('[data-functional-selector="answer-3"]').click();
    }
});
})();
