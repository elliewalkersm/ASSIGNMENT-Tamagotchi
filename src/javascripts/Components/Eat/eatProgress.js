const fullScore = () => {
  const domString = `<div class="progress" id="fullScore">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>`;

  document.querySelector('#eat').innerHTML = domString;
};

export default fullScore;
