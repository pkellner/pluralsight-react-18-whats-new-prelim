import { useContext } from "react";
import { CityListStoreContext } from "../CityListStoreContext";

export default function CityDisplayCount() {
  const { setResourceCityList, displayCount, setDisplayCount } =
    useContext(CityListStoreContext);
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          setDisplayCount(3);
        }}
      >
        3
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          setDisplayCount(5);
        }}
      >
        5
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          //setResourceCityList(fetchCityListData(10));
          setDisplayCount(10);
        }}
      >
        10
      </button>
    </div>
  );
}
