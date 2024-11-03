import React, { useEffect, useState } from "react";

const NewItemCounter = ({ expiryDate }) => {
  const [timeToExpire, setTimeToExpire] = useState(
    Math.floor(expiryDate / 1000) - // Convert expiryDate from ms to seconds.
      Math.floor(Date.now() / 1000)
  ); // Convert Date.Now into seconds so it can be subtracted

  // Set up the countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeToExpire((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Clear interval with unmounting
  }, []);

  // Get the hours, minutes, seconds
  const hours = Math.floor(timeToExpire / 3600); // Get total hours
  const minutes = Math.floor((timeToExpire % 3600) / 60); // Get the remaining time to calculate minutes
  const seconds = timeToExpire % 60; // Get remaining seconds

  return (
    <div>
      {expiryDate !== null && (
        <div className="de_countdown">
          {`${hours}h ${minutes}m ${seconds}s`}
        </div>
      )}
    </div>
  );
};

export default NewItemCounter;
