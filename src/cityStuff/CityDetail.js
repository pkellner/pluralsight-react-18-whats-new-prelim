import { Suspense, useContext } from "react";
import { StoreContext } from "../StoreContext";

export default function CityDetail() {
  const { resource } = useContext(StoreContext);

  const city = resource.city.read();

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
