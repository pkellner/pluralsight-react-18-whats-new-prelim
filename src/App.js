import { fetchData } from "./fakeApi";
import { useState, Suspense, createContext } from "react";
import CityListAndDetail from "./cityStuff/CityListAndDetail";

const initialResource = fetchData(1);

export const ResourceContext = createContext(initialResource);

export default function App() {
  //const [resource, setResource] = useState(initialResource);
  return <CityListAndDetail />;
}
