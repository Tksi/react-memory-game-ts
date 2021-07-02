import { Card } from './Game/Card';
import { useState, VFC } from 'react';
import { initState } from './util/initState';

export const Game: VFC = () => {
  const [cardState, setCardState] = useState(initState(2));

  const handleClick = (i: number): void => {
    const { className, clickedIndex, cardsValue, isClickable } = cardState;

    // クリック禁止状態かすでにマッチしている場合は何もしない
    if (isClickable === false || className[i] === 'card-match') return;

    // 1つ目のカードを選択した時
    if (clickedIndex === null) {
      className[i] = 'card-front'; // カードを裏返す
      setCardState({
        ...cardState,
        clickedIndex: i,
        className,
      });
    }

    //2つ目のカードを選択した時
    else {
      if (i === clickedIndex) return; // 1つ目に開いたカードだと何もしない

      // 1つ目と2つ目の値が同じ時
      if (cardsValue[clickedIndex] === cardsValue[i]) {
        // マッチしている状態にする
        className[i] = 'card-match';
        className[clickedIndex] = 'card-match';
        setCardState({
          ...cardState,
          clickedIndex: null,
          className,
        });
      }

      // 1つ目を2つ目の値が違う時
      else {
        // カードを表にする
        className[i] = 'card-unmatch';
        className[clickedIndex] = 'card-unmatch';
        setCardState({
          ...cardState,
          className,
          isClickable: false,
        });

        // 1秒後に裏に戻す
        setTimeout(() => {
          className[i] = 'card-back';
          className[clickedIndex] = 'card-back';
          setCardState({
            ...cardState,
            clickedIndex: null,
            className,
            isClickable: true,
          });
        }, 1000);
      }
    }

    //　クリア時、カードを2つ増やして初期化
    if (className.every((v) => v === 'card-match')) {
      setTimeout(() => {
        setCardState(initState(className.length + 2));
      }, 1000);
    }
  };

  return (
    <>
      {cardState.cardsValue.map((cardValue, i) => {
        return (
          <Card
            key={i}
            value={cardValue}
            onClick={() => handleClick(i)}
            className={cardState.className[i]}
          />
        );
      })}
    </>
  );
};
