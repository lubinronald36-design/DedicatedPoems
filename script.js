const poemForm = document.getElementById('poem-form');
const poemList = document.getElementById('poem-list');

// Load poems from local storage
let poems = JSON.parse(localStorage.getItem('poems')) || [];

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
