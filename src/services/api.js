import quests from './quest-data.js';

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
    },
    getQuests() {
        return quests;
    }

};

export default api;