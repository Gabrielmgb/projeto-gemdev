import React, { useEffect, useState } from "react";

const countersData = [
  { label: "Happy Users", count: 231 },
  { label: "Issues Solved", count: 385 },
  { label: "Good Reviews", count: 159 },
  { label: "Case Studies", count: 127 },
  { label: "Orders Received", count: 211 },
];

const Statistics = () => {
  const [counts, setCounts] = useState(countersData.map(() => 0));

  useEffect(() => {
    const durations = 1500; // duração total da animação em ms
    const steps = 60;
    const interval = durations / steps;

    const increments = countersData.map((item, index) =>
      Math.ceil(item.count / steps)
    );

    let step = 0;

    const timer = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((value, i) =>
          value + increments[i] < countersData[i].count
            ? value + increments[i]
            : countersData[i].count
        )
      );

      step++;
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="counter">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="counter">
              {countersData.map((item, index) => (
                <div className="cell" key={index}>
                  <div className="counter-value number-count">
                    {counts[index]}
                  </div>
                  <p className="counter-info">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
