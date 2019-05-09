const test = QUnit.test;

test('return true when completed all quests', assert => {
    // Arrange
    const quests = [{ id: 'quest1' }, { id: 'quest2' }, { id: 'quest3' }];
    const user = { 
        completed: {
            quest1: true,
            quest2: true,
            quest3: true
        }
    }
    const expected = true;
    // Act
    const result = hasCompletedAllQuests(quests, user);
    // Assert
    assert.equal(result, expected);
});