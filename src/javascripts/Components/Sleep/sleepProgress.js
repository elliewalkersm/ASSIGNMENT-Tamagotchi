const energyScore = () => {
  const domString = `<div class="progress" id="strengthScore">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>`;

  document.querySelector('#sleep').innerHTML = domString;
};

export default energyScore;