// eslint-disable-next-line
// import _ from 'lodash';
// import inputTable from './modules/inputtable.js';
// import tableValues from './modules/tableobj.js';
import { renderContainer, toAddScore } from './modules/createtr.js';

import './style.css';

// inputTable(tableValues);

// let gameIdentity = '';
// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {

//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//   body: JSON.stringify({
//     name: 'Rocking ball',
//   }),
// }).then((res) => res.json())
//   .then((gameID) => {
//     const response = gameID.result;
//     gameIdentity = response.substring(14, response.lastIndexOf(' '));
//     console.log(gameIdentity);
//   });

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