import api from '../services/api.js';
import loadProfile from '../load-profile.js';
import createQuestLink from './create-quest-link.js';

loadProfile();

const map = document.getElementById('map-container');
const questData = api.getQuests();

for(let i = 0; i < questData.length; i++) {
    const quest = questData[i];
    
    map.appendChild(createQuestLink(quest));
    
}
