let full = 50;

const superFun = () => {
  full += 50;
  return full;
};

const slightlyFun = () => {
  full += 2;
  return full;
};

const getPlayTotal = (e) => {
  const targetId = e.target.id;

  if (targetId === 'superFun-btn') {
    document.querySelector('#fun').innerHTML = `${superFun()}`;
  } else if (targetId === 'slightlyFun-btn') {
    document.querySelector('#fun').innerHTML = `${slightlyFun()}`;
  }

  if (full >= 100) {
    document.querySelector('#fun').innerHTML = '100';
  }
};

export default getPlayTotal;
