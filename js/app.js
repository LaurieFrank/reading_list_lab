document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector ('#new-item-form');
  form.addEventListener("submit", handleFormSubmit);

  document.getElementById("#new-item-form").reset();
})

  const handleFormSubmit = function (event) {
  event.preventDefault();
  const resultFormSubmit = document.querySelector('#reading-list');

  const newBook = document.createElement("ul");
  resultFormSubmit.appendChild(newBook);

  const newTitle = document.createElement("li");
  newTitle.textContent = event.target.title.value;
  newBook.appendChild(newTitle);

  const newAuthor = document.createElement("li");
  newAuthor.textContent = event.target.author.value;
  newBook.appendChild(newAuthor);

  const newCategory = document.createElement("li");
  newCategory.textContent = event.target.category.value;
  newBook.appendChild(newCategory);

}
