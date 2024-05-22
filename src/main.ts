const formElementSubmit = document.querySelector('form');
const inputText = document.querySelector('input[type="text"]') as HTMLInputElement;

formElementSubmit?.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    if (inputText.value.trim() !== '') {
        addTodoList();
        inputText.value = '';
    }
});

function addTodoList() {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', inputText.value.trim());
    formElementSubmit?.appendChild(newDiv);
    newDiv.style.display = 'flex';
    newDiv.style.justifyContent = 'space-between'
    
    const newDivInner = document.createElement('div');
    newDiv.appendChild(newDivInner);

    const newCheckboxElement = document.createElement('input');
    newCheckboxElement.type = 'checkbox';
    newDivInner.appendChild(newCheckboxElement);

    const newLabelElement = document.createElement('label');
    newLabelElement.innerText = inputText.value.trim();
    newDivInner.appendChild(newLabelElement);

    const newButton = document.createElement('button')
    newButton.type = 'button';
    newButton.innerText = 'x';
    newButton.style.color = 'red'
    newButton.style.backgroundColor = 'transparent'
    newButton.style.border = 'none'
    newButton.style.fontSize = "16px"
    newDiv.appendChild(newButton);

    newCheckboxElement.addEventListener('change', () => {
        LineThrough(newLabelElement, newCheckboxElement.checked)
    })
    
    newButton.addEventListener('click', () => {
    remove(newDiv, newCheckboxElement);
    })
}

function LineThrough(labelElement: HTMLLabelElement, isChecked: boolean) {
    if(isChecked) {
        labelElement.style.textDecoration = 'line-through';
        
    } else {
        labelElement.style.textDecoration = 'none'
    }
}

function remove(newDiv: HTMLDivElement, checkboxElement: HTMLInputElement) {
    if (checkboxElement.checked) {
        newDiv.remove();
    } else {
        alert('Ein Todo kann nur gelöscht werden, wenn es als "gecheckt" markiert ist.');
    }
}