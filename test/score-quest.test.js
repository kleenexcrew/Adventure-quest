const test = QUnit.test;

function scoreQuest(user, choice) {
    user.hp = user.hp + choice.hp;
    user.cs = user.cs + choice.cs;
    return user;
}

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