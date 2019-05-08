import loadProfile from '../load-profile.js';
import api from '../services/api.js';
import createChoice from '../quest/create-choice.js';

const choicesParentNode = document.getElementById('choices');
const questTitle = document.getElementById('title');
const questImage = document.getElementById('image');
const questDescription = document.getElementById('description');
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

const questData = api.getQuest(id);

questTitle.textContent = questData.title;
questImage.src = './assets/' + questData.image;
questDescription.textContent = questData.description;

for (let index = 0; index < questData.choices.length; index++) {
    const choice = questData.choices[index];
    const choiceRadio = createChoice(choice);
    choicesParentNode.appendChild(choiceRadio);
}

loadProfile();