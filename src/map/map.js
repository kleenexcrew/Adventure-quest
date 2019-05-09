import api from '../services/api.js';
import loadProfile from '../load-profile.js';
import createQuestLink from './create-quest-link.js';
import createCompletedQuest from './create-completed-quest.js';
import isDead from './is-dead.js';
import hasCompletedAllQuests from './has-completed-all-quests.js';


const map = document.getElementById('map-container');
const questData = api.getQuests();
const user = api.getUser();

loadProfile();
if(isDead(user) || hasCompletedAllQuests(questData, user)) {
    window.location = './end.html';
}

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
