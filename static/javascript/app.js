var base_url = "http://127.0.0.1:5000";
var data_route = '/data';

var data_url = base_url + data_route;
// Fetch the JSON data and console log it
d3.json(data_url).then(function(data) {
  console.log(data);
});
