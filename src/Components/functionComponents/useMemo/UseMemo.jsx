import React, { useMemo, useState } from 'react';
import Child from './Child';

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(10);

  const sumOfN = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    console.log('sum', sum);
    return sum;
  };

//   const memoizedSum = useMemo(() => sumOfN(a), [a]); 
  const memoizedSum = useMemo(() => sumOfN(a), []); 
  

  const handleClick = () => {
    setCount(count => count + 1);
    // setA(prev => prev + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <p>Sum of {a}: {memoizedSum}</p>
      <button onClick={handleClick}>Click</button>
      <Child count = {count}/>
    </div>
  );
};

export default UseMemo;



// We use the useMemo hook to avoid calling a function like sumOfN again if its input (parameter) hasn't changed. 
// If the result would stay the same, there's no need to recompute it — useMemo helps us “remember” the last result and reuse it.