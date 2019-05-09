import createChoice from '../src/quest/create-choice.js';
const test = QUnit.test;

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

    const expected = '<div><input id="rush" type="radio" name="choice-radio" value="rush" required="true"><label for="rush">Rush into the burning building!</label></div>';
    // Act
    const dom = createChoice(questChoice);
    // Assert
    assert.deepEqual(dom.outerHTML, expected);
});