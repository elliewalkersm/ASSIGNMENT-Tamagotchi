let full = 100;

const runAway = () => {
  full += 1;
  return full;
};

const violence = () => {
  full -= 10;
  return full;
};

const getFightTotal = (e) => {
  const targetId = e.target.id;

  if (targetId === 'runAway-btn') {
    document.querySelector('#strength').innerHTML = `${runAway()}`;
  } else if (targetId === 'violence-btn') {
    document.querySelector('#strength').innerHTML = `${violence()}`;
  }

  if (full >= 100) {
    document.querySelector('#strength').innerHTML = '100';
  }
};

export default getFightTotal;
