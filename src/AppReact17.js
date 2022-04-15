import { useEffect, useState } from "react";

import { topCities } from "./data/cities";

let fetchCities = (displayCount) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(topCities(displayCount));
    }, 2000);
  });
};

function CityList({ displayCount }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetchCities(displayCount).then((records) => {
      setData(records);
      setIsLoading(false);
    });
  }, [displayCount]);

  if (isLoading) return <div>Loading cities...</div>;

  return (
    <ul>
      {data.map((rec) => {
        return <li key={rec.id}>{rec.city}</li>;
      })}
    </ul>
  );
}

export default function AppReact17() {
  const [max, setMax] = useState(3);

  return (
    <div className="container">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setMax(3);
          }}
        >
          3
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setMax(5);
          }}
        >
          5
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setMax(10);
          }}
        >
          10
        </button>
      </div>

      <div className="row"></div>
      <div className="row">
        <CityList displayCount={max} />
      </div>
    </div>
  );
}
