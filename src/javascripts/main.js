import '../styles/main.scss';
import fullScore from './Components/Eat/eatProgress';
import strengthScore from './Components/Fight/fightProgress';
import funScore from './Components/Play/playProgress';
import energyScore from './Components/Sleep/sleepProgress';

const init = () => {
  fullScore();
  funScore();
  strengthScore();
  energyScore();
};

init();
