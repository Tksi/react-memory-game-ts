import { render } from 'react-dom';
import { Game } from './Game';
import './index.css';

render(
  <>
    <header>Memory Game</header>
    <main>
      <Game />
    </main>
  </>,
  document.querySelector('#App')
);
