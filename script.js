// Get the form and poem list elements
const form = document.getElementById('poem-form');
const poemList = document.getElementById('poem-list');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the poem title, author, and content
  const title = document.getElementById('poem-title').value;
  const author = document.getElementById('poem-author').value;
  const content = document.getElementById('poem-content').value;

  // Create a poem object
  const poem = {
    title,
    author,
    content,
  };

  // Store the poem in local storage
  const poems = JSON.parse(localStorage.getItem('poems')) || [];
  poems.push(poem);
  localStorage.setItem('poems', JSON.stringify(poems));

  // Add the poem to the poem list
  const poemListItem = document.createElement('li');
  poemListItem.innerHTML = `
    <h3>${title}</h3>
    <p>By ${author}</p>
    <p>${content}</p>
  `;
  poemList.appendChild(poemListItem);

  // Clear the form fields
  form.reset();
});

// Load poems from local storage on page load
window.addEventListener('load', () => {
  const poems = JSON.parse(localStorage.getItem('poems')) || [];
  poems.forEach((poem) => {
    const poemListItem = document.createElement('li');
    poemListItem.innerHTML = `
      <h3>${poem.title}</h3>
      <p>By ${poem.author}</p>
      <p>${poem.content}</p>
    `;
    poemList.appendChild(poemListItem);
  });
});
