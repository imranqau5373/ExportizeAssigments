


window.onload = function(e){ 
let counting = [];
let revers = [];
let even = [];
let odd = [];
let eventk = [];
even.push(0);
for(let i = 1; i<=20; i++){
    counting.push(i);
    if(i % 2 == 0)
    {
        even.push(i);
        eventk.push(i+'K');
    }
       
    else
        odd.push(i);
}
document.getElementById("counts").innerHTML = counting.join(', ');
document.getElementById("odd").innerHTML = odd.join(', ');

document.getElementById("even").innerHTML = even.join(', ');
document.getElementById("eventK").innerHTML = eventk.join(', ');

for(let i = 10; i>=1; i--){
    revers.push(i);
}
document.getElementById("revers").innerHTML = revers.join(', ');

};

