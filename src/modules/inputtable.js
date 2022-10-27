const inputTable = (arr) => {
  arr.forEach((data) => {
    document.querySelector('.table').innerHTML += `
    <tr>
       <td>${data.name}: ${data.score}</td>
    </tr>
  `;
  });
};

export default inputTable;
