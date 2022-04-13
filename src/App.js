import { fetchData } from "./fakeApi";
import CityListAndDetail from "./cityStuff/CityListAndDetail";

import { StoreContext, StoreProvider } from "./StoreContext";

export default function App() {
  //const [resource, setResource] = useState(initialResource);
  return (
    <StoreProvider>
      <CityListAndDetail />
    </StoreProvider>
  );
}
