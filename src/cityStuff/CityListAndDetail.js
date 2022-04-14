import { Suspense } from "react";
import CityHeader from "./CityHeader";
import CityList from "./CityList";
import CityDetail from "./CityDetail";

export default function CityListAndDetail() {
  return (
    <div className="container">
      <h2>With Suspense</h2>
      <CityHeader />
      <div className="row">
        <Suspense fallback={<div>Loading CityList...</div>}>
          <CityList>
            <Suspense fallback={<div>Loading CityDetail...</div>}>
              <CityDetail />
            </Suspense>
          </CityList>
        </Suspense>
      </div>
    </div>
  );
}
