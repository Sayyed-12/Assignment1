const temperatures = [
  { date: "2024-01-01", temp: 22 },
  { date: "2024-01-02", temp: 25 },
  { date: "2024-01-03", temp: 19 },
  { date: "2024-01-04", temp: 28 },
  { date: "2024-01-05", temp: 24 },
  { date: "2024-01-06", temp: 21 },
  { date: "2024-01-07", temp: 26 }
];

// a) Find the hottest and coldest days
function findExtremes(data) {
  var hottest = data.reduce(function (max, current) {
    return current.temp > max.temp ? current : max;
  });

  var coldest = data.reduce(function (min, current) {
    return current.temp < min.temp ? current : min;
  });

  return {
    hottest: hottest,
    coldest: coldest
  };
}

// b) Calculate the average temperature
function getAverageTemp(data) {
  var total = data.reduce(function (sum, current) {
    return sum + current.temp;
  }, 0);

  return total / data.length;
}

// c) Find days where temperature increased from the previous day
function getIncreasingDays(data) {
  var result = [];

  for (var i = 1; i < data.length; i++) {
    if (data[i].temp > data[i - 1].temp) {
      result.push(data[i]);
    }
  }

  return result;
}

// d) Identify temperature anomalies (more than 5 degrees different from average)
function findAnomalies(data) {
  var avg = getAverageTemp(data);

  return data.filter(function (entry) {
    return Math.abs(entry.temp - avg) > 5;
  });
}

// e) Create a summary with min, max, average, and total days recorded
function getSummary(data) {
  var extremes = findExtremes(data);
  var average = getAverageTemp(data);
  var totalDays = data.length;

  return {
    min: extremes.coldest.temp,
    max: extremes.hottest.temp,
    average: average,
    totalDays: totalDays
  };
}

// Final output
console.log("a) Hottest and Coldest Days:", findExtremes(temperatures));
console.log("b) Average Temperature:", getAverageTemp(temperatures));
console.log("c) Days with Increasing Temp:", getIncreasingDays(temperatures));
console.log("d) Anomalies (±5° from average):", findAnomalies(temperatures));
console.log("e) Weekly Summary:", getSummary(temperatures));
