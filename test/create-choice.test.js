const test = QUnit.test;

function createChoice(questChoice) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    
    input.id = questChoice.id;
    input.type = 'radio';
    input.name = 'choice-radio';
    input.value = questChoice.id;
    
    label.setAttribute('for', questChoice.id);
    label.textContent = questChoice.description;
    div.appendChild(input);
    div.appendChild(label);

    return div;
}

test('make quest choice radio', assert => {
    // Arrange
    const questChoice = {
        id: 'rush',
        description: 'Rush into the burning building!',
        result: `
            You rush in and save the lives of 10 people, but you
            also get burned!`,
        hp: -20,
        cs: 10
    };

    const expected = '<div><input id="rush" type="radio" name="choice-radio" value="rush"><label for="rush">Rush into the burning building!</label></div>';
    // Act
    const dom = createChoice(questChoice);
    // Assert
    assert.deepEqual(dom.outerHTML, expected);
});