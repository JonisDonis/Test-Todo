// HTML VARIABLES
const categoryField = document.querySelector('.master-input-field');
const categoryBtn = document.querySelector('.master-input-btn');
const todoMasterWrapper = document.querySelector('.todo-master-wrapper');
const clearBtn = document.querySelector('.clear-btn');

// STORAGE FUNCTION
// Saves all content in todoWrapper and saves it in browser memory. 'key', variable
function saveState() {
  const todoWrapperContent = todoMasterWrapper.innerHTML;
  localStorage.setItem('todoState', todoWrapperContent);
  console.log('State saved');
};

// LOADS STATE FROM LOCAL STORAGE
function loadState() {
  const savedState = localStorage.getItem('todoState');
  if (saveState) {
    todoMasterWrapper.innerHTML = savedState;
    console.log('Saved state loaded from local storage');
  } else {
    console.log('No saved states for this session');
  }
}
loadState();


// --::ADD TODO-CATEGORY::--
categoryBtn.addEventListener('click', function () {
  let newCategory = categoryField.value;

  // CREATE todo-wrapper
  const newTodoWrapper = document.createElement('div');
  newTodoWrapper.className = 'todo-wrapper';

  // CREATE todo-input-container
  const newTodoContainer = document.createElement('div');
  newTodoContainer.className = 'todo-input-container';

  // CREATE todo-input-field
  const newTodoInputField = document.createElement('input');
  newTodoInputField.className = 'todo-input-field';
  newTodoInputField.type = 'text';
  newTodoInputField.placeholder = categoryField.value;

  // CREATE todo-input-button
  const newTodoBtn = document.createElement('button');
  newTodoBtn.className = 'todo-input-btn';
  newTodoBtn.innerText = '+';

  // CREATE todo-remove-button
  const newTodoRemoveBtn = document.createElement('button');
  newTodoRemoveBtn.className = 'todo-input-remove-btn';
  newTodoRemoveBtn.innerText = '-';

  // CREATE todo-list-section
  const newTodoListSection = document.createElement('div');
  newTodoListSection.className = 'todo-list-section';

  // APPEND
  newTodoContainer.appendChild(newTodoInputField);
  newTodoContainer.appendChild(newTodoBtn);
  newTodoContainer.appendChild(newTodoRemoveBtn);
  newTodoWrapper.appendChild(newTodoContainer);
  newTodoWrapper.appendChild(newTodoListSection);
  todoMasterWrapper.appendChild(newTodoWrapper);

  // SAVING STATE AFTER LOADED ITEMS
  saveState();

  // REMOVES TODO-WRAPPER (todo category)
  newTodoRemoveBtn.addEventListener('click', function () {
    newTodoWrapper.parentElement.removeChild(newTodoWrapper);

    // SAVING STATE AFTER LOADED ITEMS
    saveState();
  });

  // CLEAR CATEGORY FIELD
  categoryField.value = '';


  // --::ADD TODO::--
  newTodoBtn.addEventListener('click', function () {
    // CREATE todo-holder / todo-list-part
    const newTodoHolder = document.createElement('div');
    newTodoHolder.className = 'todo-list-part';

    // CREATE todo-paragraph
    const newTodoParagraph = document.createElement('p');
    newTodoParagraph.className = 'todo-para';
    newTodoParagraph.textContent = newTodoInputField.value;

    // CREATE todo-button-finnished
    const newTodoBtnFinnished = document.createElement('button');
    newTodoBtnFinnished.className = 'todo-btn-finnished';

    // APPEND
    newTodoHolder.appendChild(newTodoParagraph);
    newTodoHolder.appendChild(newTodoBtnFinnished);
    newTodoListSection.appendChild(newTodoHolder);

    // SAVING STATE AFTER LOADED ITEMS
    saveState();

    // REMOVES TODO
    newTodoBtnFinnished.addEventListener('click', function () {
      newTodoHolder.parentElement.removeChild(newTodoHolder);

      // SAVING STATE AFTER LOADED ITEMS
      saveState();
    });

    // CLEAR TODO FIELD
    newTodoInputField.value = '';
  });
});


// CLEAR BUTTON - REMOVES ALL CONTENT
clearBtn.addEventListener('click', function () {
  todoMasterWrapper.innerHTML = '';
  localStorage.removeItem('todoState')
  // SAVING STATE AFTER LOADED ITEMS
  saveState();
})
