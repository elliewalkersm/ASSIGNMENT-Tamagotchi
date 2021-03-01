import '../styles/main.scss';
import buildDom from './helpers/buildDom';
import domEvents from './helpers/domEvents';

const init = () => {
  buildDom();
  domEvents();
};

init();
