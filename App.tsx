import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [hours, setHours] = useState('00');
  const [mins, setMins] = useState('00');
  const [secs, setSecs] = useState('00');

  return <div>{`${hours}:${mins}:${secs}`}</div>;
}
