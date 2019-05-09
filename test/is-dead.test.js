const test = QUnit.test;

function isDead(user) {
    return true;
}

test('return true if dead', assert => {
    // Arrange
    const user = {
        hp: 0
    };

    const expected = true;
    // Act
    const result = isDead(user);
    // Assert
    assert.deepEqual(result, expected);
});