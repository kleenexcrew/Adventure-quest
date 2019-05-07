import createCompletedQuest from '../src/map/create-completed-quest.js';
const test = QUnit.test;

test('create span element', function(assert) {
    //Arrange
    const quest = {
        title: 'Burning Building',
    };

    const expected = '<span>Burning Building</span>';
    //Act 
    const dom = createCompletedQuest(quest);
    //Assert
    assert.deepEqual(dom.outerHTML, expected);
});