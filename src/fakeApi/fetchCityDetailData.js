import { cities } from "../data/cities";

export function fetchCityDetailData(cityId) {
  let cityInfoPromise = fetchCityInfo(cityId);
  let cityStatsPromise = fetchCityStats(cityId);
  let cityLocationPromise = fetchCityLocation(cityId);
  return {
    cityInfo: wrapPromise(cityInfoPromise),
    cityStats: wrapPromise(cityStatsPromise),
    cityLocation: wrapPromise(cityLocationPromise),
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

const fetchCityInfo = (cityId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        cities
          .filter((a) => a.id == cityId)
          .map(function (rec) {
            return {
              id: rec.id,
              name: rec.city,
              state: rec.state,
            };
          })
      );
    }, 1500);
  });
};

const fetchCityStats = (cityId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        cities
          .filter((a) => a.id == cityId)
          .map(function (rec) {
            return {
              id: rec.id,
              population: rec.population,
              growth: rec.growth_from_2000_to_2013,
            };
          })
      );
    }, 2500);
  });
};

const fetchCityLocation = (cityId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        cities
          .filter((a) => a.id == cityId)
          .map(function (rec) {
            return {
              id: rec.id,
              latitude: rec.latitude,
              longitude: rec.longitude,
            };
          })
      );
    }, 500);
  });
};

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
