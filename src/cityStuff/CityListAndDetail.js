import { Suspense } from "react";
import CityList from "./CityList";
import CityDetail from "./CityDetail";
import { CityListStoreProvider } from "../CityListStoreContext";
import CityDisplayCount from "./CityDisplayCount";
import { DisplayCountProvider } from "../DisplayCountContext";

export default function CityListAndDetail() {
  return (
    <DisplayCountProvider initialDisplayCount={3}>
      <CityListStoreProvider>
        <div className="container">
          <h2>Suspense in React 18 (Pluralsight Course)</h2>
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
    </DisplayCountProvider>
  );
}
