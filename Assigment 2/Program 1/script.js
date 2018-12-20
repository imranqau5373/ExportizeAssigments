

window.onload = function(e){ 

    let student = ['Imran','Ahmad','Hamad','Abdullah'];
    let studentScore = [300,350,400,358];
    let totalMarks = 500;
    for(let i =0; i < 3; i++){
        let studentName = student[i];
        let obtainMarks = studentScore[i];
        let percentage = (obtainMarks * 100)/500;
        document.getElementById(i).innerHTML = "* Score of "+studentName+ " is "+obtainMarks+". Percentage is "+percentage+"%.";
    }

};

