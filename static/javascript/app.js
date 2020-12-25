import { data_url } from './route_constants.js';

var div_element = d3.select("#table1");
var ul_element = div_element.append("ul");

d3.json(data_url).then(function(data) {
    for (let [key, value] of Object.entries(data)) {
        ul_element.append("li").text(`${key}: ${value}`)
    }
});
