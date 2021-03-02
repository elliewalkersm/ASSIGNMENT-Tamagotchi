const buildDom = () => {
  document.querySelector('#eat').innerHTML = `<h5>Eat</h5>
      <p id="full">100</p>
      <div id="btn-container">
        <button type="button" class="btn btn-info" id="healthy-btn">Healthy</button>
        <button type="button" class="btn btn-warning" id="unhealthy-btn">Unhealthy</button>
      </div>`;

  document.querySelector('#play').innerHTML = `<h5>Play</h5>
      <p id="fun">50</p>
      <div id="btn-container">
        <button type="button" class="btn btn-info" id="superFun-btn">Super Fun</button>
        <button type="button" class="btn btn-warning" id="slightlyFun-btn">Slightly Fun</button>
      </div>`;

  document.querySelector('#fight').innerHTML = `<h5>Fight</h5>
      <p id="strength">100</p>
      <div id="btn-container">
        <button type="button" class="btn btn-info" id="runAway-btn">Run Away</button>
        <button type="button" class="btn btn-warning" id="violence-btn">Violence</button>
      </div>`;

  document.querySelector('#sleep').innerHTML = `<h5>Sleep</h5>
      <p id="energy">50</p>
      <div id="btn-container">
        <button type="button" class="btn btn-info" id="nap-btn">Nap</button>
        <button type="button" class="btn btn-warning" id="slumber-btn">Slumber</button>
      </div>`;
};

export default buildDom;
