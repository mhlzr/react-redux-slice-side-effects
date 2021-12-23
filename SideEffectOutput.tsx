import React from 'react';
import { useAppSelector } from './hooks';

export default () => {
  const derivedValue = useAppSelector((state) => state.sideEffect.derivedValue);
  return <output>SideEffect: {derivedValue}</output>;
};
