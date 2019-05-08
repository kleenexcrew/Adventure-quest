import api from '../src/services/api.js';
import quests from '../src/services/quest-data.js';

const test = QUnit.test;

QUnit.testStart(() => {
    sessionStorage.clear();
});


api.storage = sessionStorage;

test('saves and gets signup form data', function(assert) {
    //Arrange
    const user = {
        name: 'wes',
        power: 'invisibility',
        hp: 50,
        cs: 0
    };

    //Act 
    api.signUp(user);
    const result = api.getUser();

    //Assert
    assert.deepEqual(result, user);
});

test('gets all quests', assert => {
    // Arrange
    const expected = quests;
    // Act
    const results = api.getQuests();
    // Assert
    assert.deepEqual(results, expected);
});

test('get quest with id', assert => {
    // Arrange
    const expected = quests[1];
    // Act
    const foundQuest = api.getQuest(expected.id);
    // Assert
    assert.deepEqual(foundQuest, expected);
});