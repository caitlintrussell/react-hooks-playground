import React, { useState } from 'react';

const ActiveButton = () => {
  const [activated, setActivated] = useState(false);
  const buttonText = `${activated ? 'A' : 'Ina'}ctive`;

  return (
    <button type="button" onClick={() => setActivated(!activated)}>
      {buttonText}
    </button>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <h3> Count: {count}</h3>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

const UseStateComponents = () => {
  return (
    <section>
      <h1>UseState()</h1>
      <ActiveButton />
      <Counter />
    </section>
  );
};

export default UseStateComponents;
