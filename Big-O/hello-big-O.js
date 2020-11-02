const { performance, PerformanceObserver } = require("perf_hooks");

const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(100).fill("nemo");

function findNemo(array) {
  const t0 = performance.now();
  const nemo = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!!!");
      nemo.push(array[i]);
    }
  }
  const t1 = performance.now();
  console.log(`Call to find Nemo took ${t1 - t0} milliseconds.`);
  return nemo;
}

function findNemoWithFilter(array) {
  const t0 = performance.now();
  const nemo = array.filter((i) => {
    if (i === "nemo") {
      console.log("Found NEMO!!!");
      return i;
    }
  });
  const t1 = performance.now();
  console.log(`Call to find Nemo took ${t1 - t0} milliseconds.`);
  return nemo;
}

findNemo(large);
findNemoWithFilter(large);
