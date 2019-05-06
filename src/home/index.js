import makeUser from './make-user.js';
import api from '../services/api.js';

const createHero = document.getElementById('create-hero');

createHero.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(createHero);
    const user = makeUser(formData);
    
    api.signUp(user);

    window.location = '../../map.html';
});