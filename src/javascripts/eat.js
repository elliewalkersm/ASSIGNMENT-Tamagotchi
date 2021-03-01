let full = 100;

const healthy = () => {
  full += 10;
  return full;
};

const unhealthy = () => {
  full -= 3;
  return full;
};

const getEatTotal = (e) => {
  const targetId = e.target.id;

  if (targetId === 'healthy-btn') {
    document.querySelector('#full').innerHTML = `${healthy()}`;
  } else if (targetId === 'unhealthy-btn') {
    document.querySelector('#full').innerHTML = `${unhealthy()}`;
  }

  if (full >= 100) {
    document.querySelector('#full').innerHTML = '100';
  }
};

export default getEatTotal;
