import scoreHp from '../src/end/score-hp.js';

const test = QUnit.test;

test('return dead if dead', assert => {
    // Arrange
    const user = {
        hp: 0
    };
    
    const expected = 'dead';
    // Act
    const result = scoreHp(user);
    // Assert
    assert.equal(result, expected);
});

test('return crippled if less than 50 and greater than 0', assert => {
    // Arrange
    const user = {
        hp: 49
    };
    
    const expected = 'crippled';
    // Act
    const result = scoreHp(user);
    // Assert
    assert.equal(result, expected);
});

test('return healthy if hp 50 and above', assert => {
    // Arrange
    const user = {
        hp: 50
    };
    
    const expected = 'healthy';
    // Act
    const result = scoreHp(user);
    // Assert
    assert.equal(result, expected);
});