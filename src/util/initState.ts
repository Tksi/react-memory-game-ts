type InitState = (len: number) => {
  clickedIndex: number | null;
  cardsValue: number[];
  className: string[];
  isClickable: boolean;
};

export const initState: InitState = (len) => {
  return {
    clickedIndex: null,
    cardsValue: generateCards(len),
    className: Array(len).fill('card-back'),
    isClickable: true,
  };
};

const generateCards = (len: number): number[] => {
  const arr = [...Array((len / 2) | 0).keys(), ...Array((len / 2) | 0).keys()];
  return shuffleArr(arr);
};

const shuffleArr = (arr: any[]): any[] =>
  arr
    .map((v) => [Math.random(), v])
    .sort(([a], [b]) => a - b)
    .map((v) => v[1]);
