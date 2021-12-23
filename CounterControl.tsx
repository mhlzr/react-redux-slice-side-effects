import React, { useState } from 'react';
import { add, subtract } from './counter-slice';
import { useAppDispatch } from './hooks';

export default () => {
  const [value, setValue] = useState(1);
  const dispatch = useAppDispatch();
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button type="button" onClick={() => dispatch(add(value))}>
        Add
      </button>
      <button type="button" onClick={() => dispatch(subtract(value))}>
        Subtract
      </button>
    </div>
  );
};
