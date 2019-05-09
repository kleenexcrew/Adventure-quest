import scoreHp from '../src/end/score-hp.js';

const test = QUnit.test;

test('return useless if equal to 0', assert => {
    // Arrange
    const user = {
        cs: 0
    };
    
    const expected = 'useless';
    // Act
    const result = scoreCs(user);
    // Assert
    assert.equal(result, expected);
});

test('return helpful if less than or equal to 50', assert => {
    // Arrange
    const user = {
        cs: 49
    };
    
    const expected = 'helpful';
    // Act
    const result = scoreCs(user);
    // Assert
    assert.equal(result, expected);
});

test('return virtuous if cs above 50', assert => {
    // Arrange
    const user = {
        cs: 51
    };
    
    const expected = 'virtuous';
    // Act
    const result = scoreCs(user);
    // Assert
    assert.equal(result, expected);
});