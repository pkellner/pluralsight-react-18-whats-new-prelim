export function fetchData(cityId = undefined) {
  let citiesPromise = fetchCities();
  let cityPromise = fetchCity(cityId);
  return {
    cities: wrapPromise(citiesPromise),
    city: wrapPromise(cityPromise),
  };
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        console.log(`status pending`);
        throw suspender;
      } else if (status === "error") {
        console.log(`status error`);
        throw result;
      } else if (status === "success") {
        console.log(`status success`);
        return result;
      }
    },
  };
}

function fetchCities() {
  console.log("fetch cities...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetched cities");
      resolve([
        {
          id: 6,
          city: "Chicago",
          state: "Illinois",
        },
        {
          id: 5,
          city: "Los Angeles",
          state: "California",
        },
        {
          id: 4,
          city: "New York",
          state: "New York",
        },
      ]);
    }, 3000);
  });
}

function fetchCity(cityId) {
  console.log(`fetch city ${cityId}...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`fetched cityId: ${cityId}`);
      if (!cityId) {
        resolve([]);
      } else {
        resolve(
          [
            {
              id: 6,
              city: "Chicago",
              state: "Illinois",
            },
            {
              id: 5,
              city: "Los Angeles",
              state: "California",
            },
            {
              id: 4,
              city: "New York",
              state: "New York",
            },
          ].filter((a) => a.id == cityId)
        );
      }
    }, 4000);
  });
}
