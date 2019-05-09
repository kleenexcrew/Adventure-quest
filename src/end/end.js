import loadProfile from '../load-profile.js';
import scoreCs from './score-cs.js';
import scoreHp from './score-hp.js';
import api from '../services/api.js';
import csMessages from './cs-messages.js';
import hpMessages from './hp-messages.js';

const user = api.getUser();
const hpImage = document.getElementById('hp-image');
const hpMessage = document.getElementById('hp-message');
const csImage = document.getElementById('cs-image');
const csMessage = document.getElementById('cs-message');

const csString = csMessages[scoreCs(user)];
const hpString = hpMessages[scoreHp(user)];

hpMessage.textContent = hpString;
csMessage.textContent = csString;

hpImage.src = './assets/' + scoreHp(user) + '.png';
csImage.src = './assets/' + scoreCs(user) + '.png';

loadProfile();