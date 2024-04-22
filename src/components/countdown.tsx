import React, { useState, useEffect } from 'react';

type TargetDate = string;

interface Props {
  targetDate: TargetDate;
}

const Countdown: React.FC<Props> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTimeUnit = (unit: number) => {
    return unit.toString().padStart(2, '0');
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>
        {time.days > 0 && <span>{formatTimeUnit(time.days)} days </span>}
        {time.hours > 0 && <span>{formatTimeUnit(time.hours)} hours </span>}
        {time.minutes > 0 && <span>{formatTimeUnit(time.minutes)} minutes </span>}
        {time.seconds > 0 && <span>{formatTimeUnit(time.seconds)} seconds </span>}
      </div>
    </div>
  );
};

export default Countdown;
