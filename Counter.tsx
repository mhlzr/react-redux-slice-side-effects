import React from 'react';
import { useAppSelector } from './hooks';

export default () => {
  const count = useAppSelector((state) => state.counter.value);
  return <div>Count: {count}</div>;
};
