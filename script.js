const poemForm = document.getElementById('poem-form');
const poemList = document.getElementById('poem-list');

// Load poems from local storage or use default poems
let poems = JSON.parse(localStorage.getItem('poems')) || [
  {
    title: 'The Road Not Taken',
    author: 'Robert Frost',
    content: 'Two roads diverged in a yellow wood, And sorry I could not travel both...'
  },
  {
    title: 'The Love Song of J. Alfred Prufrock',
    author: 'T.S. Eliot',
    content: 'Let us go then, you and I, When the evening is spread out against the sky...'
  },
  {
    title: 'Do Not Go Gentle into That Good Night',
    author: 'Dylan Thomas',
    content: 'Do not go gentle into that good night, Old age should burn and rave at close of day...'
  }
];

function displayPoems() {
  poemList.innerHTML = '';
  poems.forEach((poem, index) => {
    const newPoem = document.createElement('li');
    newPoem.innerHTML = `
      <h3>${poem.title}</h3>
      <p>${poem.content}</p>
      <p>— ${poem.author}</p>
    `;
    poemList.appendChild(newPoem);
  });
}

poemForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const poemTitle = document.getElementById('poem-title').value;
  const poemAuthor = document.getElementById('poem-author').value;
  const poemContent = document.getElementById('poem-content').value;

  // Validate input
  if (poemTitle.trim() === '' || poemAuthor.trim() === '' || poemContent.trim() === '') {
    alert('Please fill out all fields.');
    return;
  }

  // Add poem to array and local storage
  poems.push({
    title: poemTitle,
    author: poemAuthor,
    content: poemContent
  });
  localStorage.setItem('poems', JSON.stringify(poems));

  // Display poems
  displayPoems();

  // Clear form fields
  poemForm.reset();
});

// Display poems on page load
displayPoems();
