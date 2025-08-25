import React, { useEffect, useState } from "react";

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const end = new Date();
    end.setHours(23, 59, 59, 999); // countdown till end of the day
    const diff = end - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flash-sales">
      <div className="left">
         <div className="flash-name">
         <span className="icon">⚡</span>
         <span className="text">Flash Sales</span>

         </div>
         <div className="middle">
         Time Left:{" "}
         <strong>
          {String(timeLeft.hours).padStart(2, "0")}h :{" "}
          {String(timeLeft.minutes).padStart(2, "0")}m :{" "}
          {String(timeLeft.seconds).padStart(2, "0")}s
         </strong>
       </div>
      </div>
     
      <div className="right">
        <a href="#">See All &gt;</a>
      </div>
    </div>
  );
};

export default FlashSales;
