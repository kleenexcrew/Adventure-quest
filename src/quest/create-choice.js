function createChoice(questChoice) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    
    input.id = questChoice.id;
    input.type = 'radio';
    input.name = 'choice-radio';
    input.value = questChoice.id;
    input.setAttribute('required', true);
    
    label.setAttribute('for', questChoice.id);
    label.textContent = questChoice.description;
    div.appendChild(input);
    div.appendChild(label);

    return div;
}

export default createChoice;