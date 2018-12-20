



function multipleUser(){
    let number = document.getElementById("userNumber").value;
    for(let i = 1; i<=10; i++){
        let arrData = [];
        for(let j = 1; j<= number; j++){
            arrData.push(j+"X"+i+"="+(j*i));
        }
        console.log(...arrData);

    }

}

