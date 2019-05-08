import scoreQuest from '../src/quest/score-quest.js';

const test = QUnit.test;

test('score the quest', function(assert) {
    //Arrange
    const user = {
        hp: 50,
        cs: 0
    };
    const choice = {
        hp: -30,
        cs: 5
    };
    const expected = {
        hp: 20,
        cs: 5
    };
    //Act 
    const updatedUser = scoreQuest(user, choice);

    //Assert
    assert.deepEqual(updatedUser, expected);
});