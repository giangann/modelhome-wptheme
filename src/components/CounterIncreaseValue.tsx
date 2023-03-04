
import React, { useState } from 'react';
import { OswaldTypo } from '../styled';

export const CounterIncreaseValue = (props: { num: number } & React.CSSProperties) => {
  const { num, ...sxProps } = props;

  const [counter, setCounter] = useState<number>(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (counter === num) {
        clearInterval(timer);
        return;
      }
      setCounter((prev) => prev + 1);
    }, 500/num);

    return () => clearInterval(timer);
  }, [counter]);

  return <OswaldTypo sx={{ ...sxProps, color: 'white' }}>{counter}</OswaldTypo>;
};
