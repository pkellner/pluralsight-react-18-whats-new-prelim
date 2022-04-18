import { Suspense } from "react";
import CityList from "./CityList";
import CityDetail from "./CityDetail";
import { CityListStoreProvider } from "../CityListStoreContext";
import CityDisplayCount from "./CityDisplayCount";

export default function CityListAndDetail() {
  return (
    <CityListStoreProvider initialDisplayCount={5}>
      <div className="container">
        <h2>Suspense in React 18 (Course)</h2>
        <CityDisplayCount />
        <div className="row">
          <Suspense fallback={<div>Loading...</div>}>
            <CityList>
              <Suspense fallback={<div>Loading...</div>}>
                <CityDetail />
              </Suspense>
            </CityList>
          </Suspense>
        </div>
      </div>
    </CityListStoreProvider>
  );
}
