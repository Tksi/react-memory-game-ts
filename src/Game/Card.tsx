import { VFC } from 'react';

type Props = {
  value: string;
};

export const Card: VFC<Props> = (props) => {
  return <div>{props.value}</div>;
};
