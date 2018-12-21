



function convertMinutes(){
    let userMinutes = document.getElementById("minutes").value;
    let hours = Math.trunc(userMinutes /60);
    let minutes = userMinutes % 60;
    document.getElementById("result").innerHTML = "Total Hours is "+hours+ " and Minutes is "+minutes;


}

