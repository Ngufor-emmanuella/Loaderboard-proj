// eslint-disable-next-line
import { renderContainer, toAddScore } from './modules/createtr.js';

import './style.css';

const refresh = document.querySelector('#refresh-button');

refresh.addEventListener('click', () => {
  renderContainer('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JCBMuqF3cBhfDKDAJXEo/scores');
});

const submitscore = document.getElementById('submit-button');
const yourName = document.getElementById('name');
const score = document.getElementById('score');
submitscore.addEventListener('click', (e) => {
  e.preventDefault();
  if (yourName.value !== '' && score.value !== '') {
    submitscore.classList.add('onfocuss');
    toAddScore('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JCBMuqF3cBhfDKDAJXEo/scores', yourName.value, score.value);
    document.forms[0].reset();
  }
});