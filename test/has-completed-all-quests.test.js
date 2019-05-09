import hasCompletedAllQuests from '../src/map/has-completed-all-quests.js';
const test = QUnit.test;

const quests = [{ id: 'quest1' }, { id: 'quest2' }, { id: 'quest3' }];

test('return true when completed all quests', assert => {
    // Arrange
    const user = { 
        completed: {
            quest1: true,
            quest2: true,
            quest3: true
        }
    };
    const expected = true;
    // Act
    const result = hasCompletedAllQuests(quests, user);
    // Assert
    assert.equal(result, expected);
});

test('return false if user hasnt completed all quests', assert => {
    //arrange
    const user = {
        completed: {
            quest1: true,
            quest2: true
        }
    };
    const expected = false;
    //act
    const result = hasCompletedAllQuests(quests, user);
    assert.equal(result, expected);    
});