import { Client } from 'boardgame.io/react';
import { Cartilha } from './Game';
import { CartilhaPlayground } from './game/Board';

const App = Client({ 
  game: Cartilha,
  board: CartilhaPlayground,
});


export default App;
