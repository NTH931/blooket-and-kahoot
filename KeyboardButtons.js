javascript:(function() {
document.addEventListener('keydown', e => {
    if (event.isComposing ||event.keyCode == 81) {
        document.querySelector('[data-functional-selector="answer-0"]').click();
    }
    if (event.isComposing ||event.keyCode == 65) {
        document.querySelector('[data-functional-selector="answer-1"]').click();
    }
    if (event.isComposing ||event.keyCode == 87) {
        document.querySelector('[data-functional-selector="answer-2"]').click();
    }
    if (event.isComposing ||event.keyCode == 83) {
        document.querySelector('[data-functional-selector="answer-3"]').click();
    }
});
})();
