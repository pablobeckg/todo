var formElementSubmit = document.querySelector('form');
var inputText = document.querySelector('input[type="text"]');
formElementSubmit === null || formElementSubmit === void 0 ? void 0 : formElementSubmit.addEventListener('submit', function (event) {
    event.preventDefault();
    if (inputText.value.trim() !== '') {
        addTodoList();
        inputText.value = '';
    }
});
function addTodoList() {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', inputText.value.trim());
    formElementSubmit === null || formElementSubmit === void 0 ? void 0 : formElementSubmit.appendChild(newDiv);
    newDiv.style.display = 'flex';
    newDiv.style.justifyContent = 'space-between';
    var newDivInner = document.createElement('div');
    newDiv.appendChild(newDivInner);
    var newCheckboxElement = document.createElement('input');
    newCheckboxElement.type = 'checkbox';
    newDivInner.appendChild(newCheckboxElement);
    var newLabelElement = document.createElement('label');
    newLabelElement.innerText = inputText.value.trim();
    newDivInner.appendChild(newLabelElement);
    var newButton = document.createElement('button');
    newButton.type = 'button';
    newButton.innerText = 'x';
    newButton.style.color = 'red';
    newButton.style.backgroundColor = 'transparent';
    newButton.style.border = 'none';
    newButton.style.fontSize = "16px";
    newDiv.appendChild(newButton);
    newCheckboxElement.addEventListener('change', function () {
        LineThrough(newLabelElement, newCheckboxElement.checked);
    });
    newButton.addEventListener('click', function () {
        remove(newDiv, newCheckboxElement);
    });
}
function LineThrough(labelElement, isChecked) {
    if (isChecked) {
        labelElement.style.textDecoration = 'line-through';
    }
    else {
        labelElement.style.textDecoration = 'none';
    }
}
function remove(newDiv, checkboxElement) {
    if (checkboxElement.checked) {
        newDiv.remove();
    }
    else {
        alert('Ein Todo kann nur gelöscht werden, wenn es als "gecheckt" markiert ist.');
    }
}
