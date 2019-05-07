import api from './services/api.js';

function loadProfile() {
    const userName = document.getElementById('user-name');
    const hitPoints = document.getElementById('hp');
    const civilianSaved = document.getElementById('cs');
    const userIcon = document.getElementById('user-icon');

    const profileInfo = api.getUser();

    if(!profileInfo) {
        window.location = './';
    }

    userName.textContent = profileInfo.name;
    hitPoints.textContent = profileInfo.hp;
    civilianSaved.textContent = profileInfo.cs;
    userIcon.src = './assets/' + profileInfo.power + '.png';

}

export default loadProfile;