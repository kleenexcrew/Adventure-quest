const test = QUnit.test;

QUnit.testStart(() => {
    sessionStorage.clear();
});

const api = {
    storage: localStorage,
    signUp(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
    },
    getUser() {
        const json = api.storage.getItem('user');
        const user = JSON.parse(json);
        return user;  
    }
};

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