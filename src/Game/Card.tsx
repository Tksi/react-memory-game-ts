import { VFC } from 'react';

type Props = {
  value: number;
  className: string;
  onClick: Function;
};

export const Card: VFC<Props> = (props) => {
  return (
    <div className={props.className} onClick={() => props.onClick()}>
      {props.value}
    </div>
  );
};
