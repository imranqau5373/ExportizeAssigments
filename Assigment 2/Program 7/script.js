


window.onload = function(e){ 
let array = ['a', 'b', 'q', 'p', 'a', 'l', 'p', 'a', 'k', 'l', 'x', 'z'];
let isTrue = false;
let foundArray = [];
for (var i = 0; i < array.length - 1; i++) {
    if(array[i] == 'p'){
        if(array.length >= i+3){
            if(array[i + 1] == 'a' && array[i+2] == 'k')
                isTrue = true;
        }
    }

}
if(isTrue)
document.getElementById("results").innerHTML = "Series is find. ";
else
document.getElementById("results").innerHTML = "Series is not find. ";


};

