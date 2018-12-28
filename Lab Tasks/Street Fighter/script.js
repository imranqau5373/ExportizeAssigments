let player1 = 100;
let player2 = 100;
let attacks = {
    punch : 10,
    thapar : 15,
    kick : 20,
    hadoken : 30,
    jump : 0
};

var allatcks = Object.keys(attacks);
function game() {
    console.log('round one game start.');
    let input = prompt('Enter you attack by typing number 1 to 5');
    if(!input)
    return game();
    let attackName = allatcks[input - 1];
    let myAttack = attacks[attackName];
    console.log(attackName,myAttack);
    player2 = player2 - myAttack
    //generate next attack randomaly..
    let random = Math.random() * allatcks.length;
    let floor = Math.floor(random);
    let attackNameO = allatcks[floor];
    let OAttack = attacks[attackNameO];
    console.log(attackName,myAttack);
    player1 = player1 - OAttack;

    console.log('Player 1 ke health.',player1);

    console.log('Player 2 ke health.',player2);

}

while(player1 <= 0 || player2 <= 0){
    game();
}