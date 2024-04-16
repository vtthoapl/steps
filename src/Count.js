import { useState } from 'react';
export default function Count() {
  return (
    <>
      <Cal />
    </>
  );
}

function Cal() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getYear() + count);

  function minus() {
    if (step >= 1) {
      setStep((s) => s - 1);
    }
  }
  function plus() {
    if (step >= 0) {
      setStep((s) => s + 1);
    }
  }
  function handleMinus() {
    setCount((s) => s - step);
  }
  function handlePlus() {
    setCount((s) => s + step);
  }
  return (
    <>
      <div style={{ display: 'inline-flex', marginLeft: '45%' }}>
        <button onClick={minus}>➖</button>
        <h4 style={{ padding: '20px' }}>Step: {step}</h4>
        <button onClick={plus}>➕</button>
      </div>
      <div style={{ display: 'inline-flex', marginLeft: '45%' }}>
        <button onClick={handleMinus}>➖</button>
        <h4 style={{ padding: '20px' }}>Count: {count}</h4>
        <button onClick={handlePlus}>➕</button>
      </div>
      <h3 style={{ marginTop: '5vh', marginBottom: '5vh', marginLeft: '40vw' }}>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
        <span> {date.toDateString()}</span>
      </h3>
    </>
  );
}
