"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const birthday = new Date("October 1, 2000");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  interface TimeLeft {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  function calculateTimeLeft(): TimeLeft {
    const currentDate = new Date();
    const birthYear = birthday.getFullYear();
    const birthMonth = birthday.getMonth();
    const birthDay = birthday.getDate();
    const targetDate = new Date(birthYear + 30, birthMonth, birthDay);

    const difference = targetDate.getTime() - currentDate.getTime();
    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((difference / (1000 * 60 * 60 * 24 * 30)) % 12);
    const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30);

    const timeLeft: TimeLeft = {
      years,
      months,
      days,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    return timeLeft;
  }

  return (
    <div className="flex animate-pulse flex-row text-center text-xl font-light text-neutral-600 dark:text-neutral-200 md:text-7xl">
      <h2 className="">
        {timeLeft.years} Years, {timeLeft.months} Months, {timeLeft.days} Days
        Left{" "}
      </h2>
    </div>
  );
};

export default CountdownTimer;
