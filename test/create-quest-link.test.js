import createQuestLink from '../src/map/create-quest-link.js';

const test = QUnit.test;

test('creates correct link html', function(assert) {
    //Arrange
    const quest = {
        id: 'burning-building',
        title: 'Burning Building',
    };

    // Set up your parameters and expectations
    const expected = '<a href="./quest-page.html?id=burning-building">Burning Building</a>';

    //Act 
    const dom = createQuestLink(quest);
    // Call the function you're testing and set the result to a const

    //Assert
    assert.deepEqual(dom.outerHTML, expected);
});