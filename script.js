document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('background-music').play();
  
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
      span.addEventListener('click', () => {
        getDefinition(word);
      });
      poemText.appendChild(span);
    });
  });

  function getDefinition(word) {
    fetch(https://api.dictionaryapi.dev/api/v2/entries/en/${word})
      .then((response) => response.json())
      .then((data) => {
        if (data && data[0] && data[0].meanings && data[0].meanings[0] && data[0].meanings[0].definitions && data[0].meanings[0].definitions[0] && data[0].meanings[0].definitions[0].definition) {
          const definition = data[0].meanings[0].definitions[0].definition;
          document.getElementById('definition').innerText = definition;
        } else {
          document.getElementById('definition').innerText = 'No definition found.';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
});
