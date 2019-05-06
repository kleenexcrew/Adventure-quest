import makeUser from './make-user.js';

const createHero = document.getElementById('create-hero');

createHero.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(createHero);
    const user = makeUser(formData);
    console.log(user);
});