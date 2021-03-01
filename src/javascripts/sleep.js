let full = 50;

const nap = () => {
  full += 50;
  return full;
};

const slumber = () => {
  full += 60;
  return full;
};

const getSleepTotal = (e) => {
  const targetId = e.target.id;

  if (targetId === 'nap-btn') {
    document.querySelector('#energy').innerHTML = `${nap()}`;
  } else if (targetId === 'slumber-btn') {
    document.querySelector('#energy').innerHTML = `${slumber()}`;
  }

  if (full >= 100) {
    document.querySelector('#energy').innerHTML = '100';
  }
};

export default getSleepTotal;
