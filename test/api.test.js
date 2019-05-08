import api from '../src/services/api.js';
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