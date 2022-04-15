import { Suspense, useContext } from "react";
import CityHeader from "./CityHeader";
import CityList from "./CityList";
import CityDetail from "./CityDetail";
import {
  CityListStoreContext,
  CityListStoreProvider,
} from "../CityListStoreContext";
import CityDisplayCount from "./CityDisplayCount";

export default function CityListAndDetail() {
  return (
    <CityListStoreProvider initialDisplayCount={5}>
      <div className="container">
        <h2>With Suspense</h2>
        <CityDisplayCount />
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
    </CityListStoreProvider>
  );
}
