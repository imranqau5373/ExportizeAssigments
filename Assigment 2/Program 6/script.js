



function plandrom(){
    let plandromStr = document.getElementById("plandrom").value;
    var arr = plandromStr.split(''); 
    console.log(...arr);
    let arrRevers = [];
    for(let i = arr.length - 1; i>=0; i--){
        arrRevers.push(arr[i]);
    }
    let isPlandrom = true;
    if(arr.length != arrRevers.length)
        isPlandrom = false;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] != arrRevers[i])
            isPlandrom = false;
    }
    if(isPlandrom)
    document.getElementById("result").innerHTML = "it is Plandrom";
    else 
    document.getElementById("result").innerHTML = "it is not Plandrom.";



}

