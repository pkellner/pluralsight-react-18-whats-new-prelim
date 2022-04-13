import {Suspense, useContext, useState, useTransition} from "react";

import CityDetail from "./CityDetail";
import {ResourceContext} from "../App";

function CityListComp() {
  const resource = useContext(ResourceContext);
  const cities = resource.cities.read();
  return (
    <div className="col-3">
      {cities.map((city) => {
        return (
          <div key={city.id}>
            <button
              onClick={(e) => {
                console.log("click event: fired");
                // startTransition(() => {
                //   setSelectedCityId(city.id);
                // });
              }}
            >
              {city.city}
            </button>
          </div>
        );
      })}
    </div>
  )
}


export default function CityList() {
  // const [selectedCityId, setSelectedCityId] = useState();
  // const [isPending, startTransition] = useTransition();

  // const { data: cities } = useSwr(`${restBase}/api/city`, fetcher, {
  //   suspense: true,
  // });


  
  

  return (
    <Suspense fallback={<div>Loading CityShowData...</div>}>
      
      <CityListComp />
      
      {/*<CityDetail*/}
      {/*  selectedCityId={selectedCityId}*/}
      {/*  isPending={isPending}*/}
      {/*  cities={cities}*/}
      {/*/>*/}
    </Suspense>
  );
}
