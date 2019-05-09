import api from '../services/api.js';
import loadProfile from '../load-profile.js';
import createQuestLink from './create-quest-link.js';
import createCompletedQuest from './create-completed-quest.js';


loadProfile();

const map = document.getElementById('map-container');
const questData = api.getQuests();
const user = api.getUser();

for(let i = 0; i < questData.length; i++) {
    const quest = questData[i];
    let dom;
    if(user.completed[quest.id] === true) {
        dom = createCompletedQuest(quest);
    } else {
        dom = createQuestLink(quest);
    }
    map.appendChild(dom);
    
}
