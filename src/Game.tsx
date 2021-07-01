import { Card } from './Game/Card';
import { useState, VFC } from 'react';
import { generateCards } from './util/generateCards';
export const Game: VFC = () => {
  const [state, setState] = useState({
    cards: generateCards(10),
  });

  return (
    <>
      {state.cards.map((cardValue, i) => {
        return <Card key={i} value={cardValue} />;
      })}
    </>
  );
};
