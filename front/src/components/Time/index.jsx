import React, { useState, useEffect } from "react";

import "./index.css";
import { getISO, getDate, getTimestamp } from "../../apis/time";

const Index = () => {
  const [date, setDate] = useState("");
  const [ISO, setISO] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const getAndSetDate = () => {
    getDate().then((res) => {
      setDate(res.data);
    });
  };

  const getAndSetISO = () => {
    getISO().then((res) => {
      setISO(res.data);
    });
  };

  const getAndSetTimestamp = () => {
    getTimestamp().then((res) => {
      setTimestamp(res.data);
    });
  };

  useEffect(() => {
    getAndSetDate();
    getAndSetISO();
    getAndSetTimestamp();
  }, []);

  return (
    <div className="time-container">
      <h1>Time!</h1>
      <hr />
      <div className="time-item">
        <div>{date}</div>
        <button onClick={getAndSetDate}>refresh</button>
      </div>
      <hr />
      <div className="time-item">
        <div>
          <b>ISO String:</b> {ISO}
        </div>
        <button onClick={getAndSetISO}>refresh</button>
      </div>
      <hr />
      <div className="time-item">
        <div>
          <b>Timestamp:</b> {timestamp}
        </div>
        <button onClick={getAndSetTimestamp}>refresh</button>
      </div>
      <hr />
    </div>
  );
};

export default Index;
