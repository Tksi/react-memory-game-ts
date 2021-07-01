import { VFC, useState } from 'react';

type Props = {
  value: number;
};

export const Card: VFC<Props> = (props) => {
  return <div>{props.value}</div>;
};
