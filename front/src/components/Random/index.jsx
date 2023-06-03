import React, { useState, useEffect, useRef } from "react";
import { getRandom } from "../../apis/random";

import "./index.css";

const Index = () => {
  const [num, setNum] = useState(null);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [refresh, setRefresh] = useState(0);
  let timeout = useRef(null);

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      getRandom(min, max).then((res) => {
        setNum(res.data);
      });
    }, 500);
  }, [refresh, max, min]);

  return (
    <div className="random-container">
      <h1>Random!</h1>
      <hr />
      <div>{num || "nothing!"}</div>
      <hr />
      <h4>set a range:</h4>
      <div>
        <label>Min:</label>
        <input
          type="text"
          value={min}
          onChange={(e) => {
            setMin(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <label>Max:</label>
        <input
          type="text"
          value={max}
          onChange={(e) => {
            setMax(e.target.value);
          }}
        />
      </div>
      <br />
      <button
        onClick={() => {
          setRefresh(refresh + 1);
        }}
      >
        Generate new random!
      </button>
    </div>
  );
};

export default Index;
