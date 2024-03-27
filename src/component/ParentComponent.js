import React, { useState, useEffect } from "react";
import Home from "./Home"; // Make sure this path is correct

const ParentComponent = () => {
  const developerTypes = [
    "Full-Stack Engineer",
    "Forever Learner",
    "Problem Solver",
  ];
  const [currentDeveloperType, setCurrentDeveloperType] = useState(
    developerTypes[0]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDeveloperType((prevType) => {
        const nextIndex =
          (developerTypes.indexOf(prevType) + 1) % developerTypes.length;
        return developerTypes[nextIndex];
      });
    }, 5000); // Change every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return <Home developerType={currentDeveloperType} />;
};

export default ParentComponent;
