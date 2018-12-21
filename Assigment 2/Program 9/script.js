


window.onload = function(e){ 
let array = [24, 53, 78, 91, 12,24,58,47,78];
var sorted_arr = array.slice().sort();
var results = [];
for (var i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}

document.getElementById("results").innerHTML = "Repeating Values is "+results;



};

