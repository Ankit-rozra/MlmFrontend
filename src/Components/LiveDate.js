import React, { useState, useEffect } from 'react';

const LiveTimer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update the time every second

    return () => {
      clearInterval(timer); // Clean up the timer when the component unmounts
    };
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');

  return (
    <span className="Timer">
      {hours}:{minutes}
    </span>
  );
};

export default LiveTimer;
