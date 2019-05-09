import isDead from '../src/map/is-dead.js';

const test = QUnit.test;

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

test('return false if alive', assert => {
    // Arrange
    const user = {
        hp: 15
    };

    const expected = false;
    // Act
    const result = isDead(user);
    // Assert
    assert.deepEqual(result, expected);
});