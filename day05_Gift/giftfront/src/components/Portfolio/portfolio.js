import React, { useEffect, useState } from "react";
import axios from "axios";

const Portfolio = (props) => {
  const [purchases, setPurchases] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/random");
      const data = await response.json();
      setPurchases([...data]);
      ;
    } catch (e) {
      console.error(e);
    }
  };

  // populate purchase data
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/random"
        );
        const data = await response.data;
        setPurchases(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div
      className="portfoliocontainerchild2"
    >
      <div>
        {Object.entries(purchases).map((coin, i) => {
          return (
            <div>
              <button
                className="button"
                type="submit"
                onClick={handleSubmit}
              >
                RANDOM
              </button>
              <br></br>
              <br></br>
              <span>Description : {coin[1].description} </span>
              <br></br>
              <span>Value: {coin[1].value} </span>
              <br></br>
              <span>Event: {coin[1].event}</span>
              <br></br>
              <span>Gift Given By : {coin[1].gift_giver} </span>
              <br></br>
              
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
