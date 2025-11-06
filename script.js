document.addEventListener('DOMContentLoaded', function() {
    // Automatic scrolling
    const poemsContainer = document.querySelector('.poems');
    let scrollTop = 0;
    setInterval(() => {
        scrollTop += 1;
        poemsContainer.scrollTop = scrollTop;
        if (scrollTop >= poemsContainer.scrollHeight - poemsContainer.offsetHeight) {
            scrollTop = 0;
        }
    }, 50);

    // Clickable word definitions
    const poems = document.querySelectorAll('.poem');
    poems.forEach((poem) => {
        const poemText = poem.querySelector('p');
        const words = poemText.innerText.split(' ');
        poemText.innerHTML = '';
        words.forEach((word) => {
            const span = document.createElement('span');
            span.innerText = word + ' ';
            span.addEvent