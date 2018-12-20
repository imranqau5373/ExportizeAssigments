let FirstTeam = {
  name : '',
  score : '',
  players : []
}

let SecondTeam = {
  name : '',
  score : '',
  players : []
}

let matchSettings = {
  totalOvers : 0,
  totalScore : 0,
  target : 0
}



async function matchData(){
  clearAllMessages();
  FirstTeam.name = document.getElementById("team1").value;
  SecondTeam.name = document.getElementById("team2").value;
  let totalOvers = document.getElementById("totalOvers").value;
  document.getElementById("matchMessage").innerHTML = "The match is between "+FirstTeam.name + " and "+ SecondTeam.name;
  await sleepFor(1000);
  document.getElementById("matchMessage").innerHTML = "Toss between "+FirstTeam.name + " and "+ SecondTeam.name;
  await sleepFor(3000);
  let tossResult = myFunction(2);
  if(tossResult == 2)
  {
    tossResult = SecondTeam.name;
    SecondTeam.name = FirstTeam.name;
    FirstTeam.name = tossResult;
  }
  else
    tossResult = FirstTeam.name;
  document.getElementById("matchMessage").innerHTML =  tossResult + " Will go for bat first.";
  await sleepFor(1000);
  document.getElementById("matchMessage").innerHTML =   totalOvers +" Overs match started, "+tossResult+" is to bat first.";
  await sleepFor(2000);
 
    let totalScore,totalWickets = 0;
    let finalOver = "";
    for(let k = 1; k<=2; k++)
    {
      if(k == 1)
        document.getElementById("innings1").innerHTML =  FirstTeam.name+" Innings.";
      else
      document.getElementById("innings2").innerHTML =  SecondTeam.name+" Innings. Required Target is "+(matchSettings.target + 1)+".";
      totalScore = totalWickets = 0;
      document.getElementById("scoreMessage").innerHTML = '';
    for(let i = 1; i<=totalOvers; i++){
      document.getElementById("overMessage").innerHTML =  i + " over is started";
      for(let j = 1; j<=6; j++){
        let ballResult = myFunction(6);
        if(ballResult == 0)
        {
          document.getElementById("ballMessage").innerHTML =  " It is Out!";
          totalWickets = totalWickets + 1;
          await sleepFor(2000);
        }
        else if(ballResult == 4 || ballResult == 6)
        {
          document.getElementById("ballMessage").innerHTML =  "Hurry, Batsman Hit the "+ballResult;
          await sleepFor(1000);
        }
        else{
          document.getElementById("ballMessage").innerHTML =  ballResult+ " Scored by batsman on this ball.";
          await sleepFor(1000);
        }
        totalScore = totalScore + ballResult;
        if(k == 2 && totalScore >= matchSettings.target){
          {

            finalOver = (i-1) +"."+(j == 6 ? "0" : j) ;
            i = totalOvers + 1;
            
            break;
          }
        }
        
       
      }
      document.getElementById("scoreMessage").innerHTML =  "After "+i+" over score: "+totalScore +"/"+totalWickets;
      await sleepFor(1000);
    }
    if(k == 1)
    {
      document.getElementById("innings1").innerHTML =  FirstTeam.name + " inning scorecard: "+totalScore +"/"+totalWickets;
      matchSettings.target = totalScore;
      FirstTeam.score = totalScore;
    }
    else
    {
      document.getElementById("innings2").innerHTML =  SecondTeam.name +" inning scorecard: "+totalScore +"/"+totalWickets;
      SecondTeam.score = totalScore;
    }
    clearScoreMessage();
  }
  if(matchSettings.target > totalScore)
  {
    document.getElementById("matchResult").innerHTML =  FirstTeam.name +" Won by "+(matchSettings.target - totalScore) + " runs.";
  }
  else if (totalScore == matchSettings.target)
  document.getElementById("matchResult").innerHTML =  "Match is Tied Between Two teams.";
  else{
    document.getElementById("matchResult").innerHTML =  SecondTeam.name +" won by "+(10 - totalWickets)+ " Wickets. In "+finalOver + " overs.";
  }

}

function sleepFor( sleepDuration ){
  return new Promise(resolve => setTimeout(resolve, sleepDuration));
  }

  function myFunction(maxValue) {
    var x = Math.floor((Math.random() * maxValue) + 1);
    return x;
}

function clearAllMessages(){
  clearScoreMessage();
  document.getElementById("matchResult").innerHTML = '';
  document.getElementById("innings1").innerHTML = '';
  document.getElementById("innings2").innerHTML = '';
  document.getElementById("matchMessage").innerHTML = '';
}
function clearScoreMessage(){
    
  document.getElementById("ballMessage").innerHTML = '';
  document.getElementById("overMessage").innerHTML = '';
  document.getElementById("scoreMessage").innerHTML = '';
}

async function matchInnings(){

}
  

