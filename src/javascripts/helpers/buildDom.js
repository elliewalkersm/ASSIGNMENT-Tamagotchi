const buildDom = () => {
  document.querySelector('#eat').innerHTML = `<div class="card w-50" id="eatQuad">
    <div class="card-body">
      <h5 class="card-title">Eat</h5>
      <p id="full">100</p>
      <div id="btn-container">
        <button type="button" class="btn btn-info" id="healthy-btn">Healthy</button>
        <button type="button" class="btn btn-warning" id="unhealthy-btn">Unhealthy</button>
      </div>
    </div>
  </div>`;

  document.querySelector('#play').innerHTML = `<div class="card w-50" id="playQuad">
    <div class="card-body">
      <h5 class="card-title">Play</h5>
      <p id="fun">50</p>
      <div id="btn-container">
        <button type="button" class="btn btn-info" id="superFun-btn">Super Fun</button>
        <button type="button" class="btn btn-warning" id="slightlyFun-btn">Slightly Fun</button>
      </div>
    </div>
  </div>`;

  document.querySelector('#fight').innerHTML = `<div class="card w-50" id="fightQuad">
    <div class="card-body">
      <h5 class="card-title">Fight</h5>
      <p id="strength">100</p>
      <div id="btn-container">
        <button type="button" class="btn btn-info" id="runAway-btn">Run Away</button>
        <button type="button" class="btn btn-warning" id="violence-btn">Violence</button>
      </div>
    </div>
  </div>`;

  document.querySelector('#sleep').innerHTML = `<div class="card w-50" id="sleepQuad">
    <div class="card-body">
      <h5 class="card-title">Sleep</h5>
      <p id="energy">50</p>
      <div id="btn-container">
        <button type="button" class="btn btn-info" id="nap-btn">Nap</button>
        <button type="button" class="btn btn-warning" id="slumber-btn">Slumber</button>
      </div>
    </div>
  </div>`;
};

export default buildDom;
