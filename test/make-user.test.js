import makeUser from '../src/home/make-user.js';

const test = QUnit.test;

test('create user object from form data', function(assert) {
    //Arrange
    const formData = new FormData();

    formData.set('name', 'wes');
    formData.set('power', 'invisibility');

    // Set up your parameters and expectations

    //Act 
    const user = makeUser(formData);
    // Call the function you're testing and set the result to a const

    //Assert
    assert.deepEqual(user, {
        name: 'wes',
        power: 'invisibility',
        hp: 50,
        cs: 0
    });
});