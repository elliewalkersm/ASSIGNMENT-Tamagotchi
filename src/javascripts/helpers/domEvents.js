import getEatTotal from '../eat';
import getPlayTotal from '../play';
import getFightTotal from '../fight';
import getSleepTotal from '../sleep';

const domEvents = () => {
  document.querySelector('#healthy-btn').addEventListener('click', getEatTotal);
  document.querySelector('#unhealthy-btn').addEventListener('click', getEatTotal);
  document.querySelector('#superFun-btn').addEventListener('click', getPlayTotal);
  document.querySelector('#slightlyFun-btn').addEventListener('click', getPlayTotal);
  document.querySelector('#runAway-btn').addEventListener('click', getFightTotal);
  document.querySelector('#violence-btn').addEventListener('click', getFightTotal);
  document.querySelector('#nap-btn').addEventListener('click', getSleepTotal);
  document.querySelector('#slumber-btn').addEventListener('click', getSleepTotal);
};

export default domEvents;
