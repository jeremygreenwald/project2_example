var base_url = "http://127.0.0.1:5000";
var data_route = '/route'

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Promise Pending
const dataPromise = d3.json(base_url + data_route
console.log("Data Promise: ", dataPromise);
