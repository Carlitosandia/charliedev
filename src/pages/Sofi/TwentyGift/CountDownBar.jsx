import React, { useEffect, useState } from "react";
import "./CountDownBar.css";

export default function CountdownBar() {
  const targetDate = new Date("2025-08-04T00:00:00"); // fecha objetivo
  const [timeLeft, setTimeLeft] = useState({});
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const totalTime = targetDate - new Date("2025-05-22T00:00:00"); // fecha de inicio fija
    const updateCountdown = () => {
      const now = new Date();
      const distance = targetDate - now;
      const progress = Math.min(100, ((totalTime - distance) / totalTime) * 100);

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
      setPercentage(progress.toFixed(2));
    };

    updateCountdown(); // run immediately
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <h3 className="countdown-title">Contador hacia el 4 de agosto de 2025 🎁</h3>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>
      <p className="countdown-time">
        Faltan: {timeLeft.days} días, {timeLeft.hours}h, {timeLeft.minutes}m, {timeLeft.seconds}s
      </p>
      <p className="countdown-percent">{percentage}% del camino recorrido</p>
    </div>
  );
}
