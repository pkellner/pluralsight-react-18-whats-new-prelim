import CityListAndDetail from "./cityStuff/CityListAndDetail";

import { StoreContext, StoreProvider } from "./StoreContext";

export default function App() {
  return (
    <StoreProvider>
      <CityListAndDetail />
    </StoreProvider>
  );
}
