import { Suspense, useContext } from "react";
import { CityListStoreContext } from "../CityListStoreContext";

export default function CityDetail() {
  const { resource } = useContext(CityListStoreContext);

  //const city = resource.city.read();
  const city = { an: 101 };

  return <div>{JSON.stringify(city)}</div>;
}

/*
 const selectedCityIdLocal = selectedCityId
    ? selectedCityId
    : cities && !selectedCityId
    ? cities[0].id
    : undefined;

  console.log(
    `CityDetail: selectedCityId: ${selectedCityId}   isPending: ${
      isPending ? "true" : "false"
    }`
  );

 */
