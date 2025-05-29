import React, { useState, useEffect } from 'react';

function About() {
  const [count, setCount] = useState(0);

  // Mounting & Unmounting
  useEffect(() => {
    console.log('🟢 Component mounted');

    return () => {
      console.log('🔴 Component will unmount');
    };
  }, []);

  // Updating (when count changes)
  useEffect(() => {
    if (count !== 0) {
      console.log(`🔁 Component updated: count is now ${count}`);
    }
  }, [count]);

  return (
    <div>
      <h2>React Lifecycle with useEffect</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default About;
