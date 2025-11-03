import { Client } from 'boardgame.io/react';
import { Cartilha } from './Game';
import { CartilhaPlayground } from './game/Board';
import { Local } from 'boardgame.io/multiplayer';

const App = Client({ 
  game: Cartilha,
  board: CartilhaPlayground,
  multiplayer: Local(),
});


export default App;
