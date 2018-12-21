



function returnGuid(){
    let userLength = document.getElementById("guid").value;
    var buf = [],
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    charlen = chars.length,
    length = userLength;
    
    for (var i = 0; i < length; i++) {
        buf[i] = chars.charAt(Math.floor(Math.random() * charlen));
    }
    document.getElementById("result").innerHTML = "New Generated Guid is "+buf.join('');


}

