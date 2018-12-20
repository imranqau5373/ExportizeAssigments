


window.onload = function(e){ 
let array = [24, 53, 78, 91, 12];
let largest = 0;
let smallest = array[0];
debugger;
for(let i = 0; i<=array.length; i++){
    if(array[i] > largest)
        largest = array[i];
}
for(let i = 0; i<=array.length; i++){
    if(array[i] < smallest)
    smallest = array[i];
}
document.getElementById("Largest").innerHTML = "Largest Value is "+largest;
document.getElementById("smallest").innerHTML = "Smallest Value is "+smallest;


};

