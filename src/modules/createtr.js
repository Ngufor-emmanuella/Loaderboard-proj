const renderContainer = async (gameLInk) => {
  const res = await fetch(gameLInk);
  await res.json()
    .then((resData) => {
      const container = document.querySelector('.table');
      container.replaceChildren();
      let counts = 1;
      resData.result.forEach((scores, index) => {
        container.innerHTML += `
        <li>
          <p>${scores.user}:</p>
          <p>${scores.score}</p>
        </li> `;
        container.classList.add('x');
        if (counts % 2 === 0) {
          container.children[index].classList.add('color');
        } else {
          container.children[index].classList.add('no-color');
        }

        counts += 1;
      });
    });
};

const toAddScore = async (gameLInk, user, score) => {
  await fetch(gameLInk, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  });
};

export { renderContainer, toAddScore };
