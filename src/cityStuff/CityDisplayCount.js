import { useContext } from "react";
import { DisplayCountContext } from "../DisplayCountContext";

export default function CityDisplayCount() {
  const { displayCount, setDisplayCount } = useContext(DisplayCountContext);
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        className={
          displayCount === 3 ? "btn btn-secondary active" : "btn btn-secondary"
        }
        onClick={() => {
          setDisplayCount(3);
        }}
      >
        3
      </button>
      <button
        type="button"
        className={
          displayCount === 5 ? "btn btn-secondary active" : "btn btn-secondary"
        }
        onClick={() => {
          setDisplayCount(5);
        }}
      >
        5
      </button>
      <button
        type="button"
        className={
          displayCount === 10 ? "btn btn-secondary active" : "btn btn-secondary"
        }
        onClick={() => {
          setDisplayCount(10);
        }}
      >
        10
      </button>
    </div>
  );
}
