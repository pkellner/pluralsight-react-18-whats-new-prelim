import CityHeader from "./CityHeader";
import CityList from "./CityList";

export default function CityListAndDetail({resource}) {
  return (
    <div className="container">
      <h2>With Suspense</h2>
      <CityHeader />
      <div className="row">
        <CityList resource={resource} />
      </div>
    </div>
  );
}
