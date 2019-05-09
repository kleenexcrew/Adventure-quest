import scoreQuest from '../src/quest/score-quest.js';

const test = QUnit.test;

test('score the quest', function(assert) {
    //Arrange
    const user = {
        hp: 50,
        cs: 0,
        completed: {}
    };
    const choice = {
        hp: -30,
        cs: 5
    };
    const questId = 'burning-building';
    const expected = {
        hp: 20,
        cs: 5,
        completed: {
            'burning-building': true
        }
    };
    //Act 
    const updatedUser = scoreQuest(user, choice, questId);

    //Assert
    assert.deepEqual(updatedUser, expected);
});