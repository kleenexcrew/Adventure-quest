import quests from './quest-data.js';

const api = {
    storage: localStorage,
    saveUser(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
    },
    getUser() {
        const json = api.storage.getItem('user');
        const user = JSON.parse(json);
        return user;  
    },
    getQuests() {
        return quests;
    },
    getQuest(id) {
        for(let index = 0; index < quests.length; index++) {
            const quest = quests[index];
            
            if(quest.id === id) {
                return quest;
            } 
        }
    }
};

export default api;