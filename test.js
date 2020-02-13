
function computerPlay() {

    let textArray = ["pierre", "papier", "ciseau"];
  let  y= Math.floor(Math.random() * textArray.length);
   return textArray[y]
}




function playRound(playerSelection, computerSelection) {

        if (playerSelection === 'pierre' && computerSelection === 'ciseau') {
            return ('Player win');
        } else if (playerSelection === 'papier' && computerSelection === 'pierre') {
            return ('Player win');
        } else if (playerSelection === 'ciseau' && computerSelection === 'papier') {
            return ('Player win');
        } else if (computerSelection === 'pierre' && playerSelection === 'ciseau') {
            return ('computer win');
        } else if (computerSelection === 'papier' && playerSelection === 'pierre') {
            return ('computer win');
        } else if (computerSelection === 'ciseau' && playerSelection === 'papier') {
            return ('Computer win');
        } else if (computerSelection === 'ciseau' && playerSelection === 'ciseau') {
            return ('egalité');
        } else if (computerSelection === 'papier' && playerSelection === 'papier') {
            return ('egalité');
        } else if (computerSelection === 'pierre' && playerSelection === 'pierre') {
            return ('egalité');
        }

}


function game() {
    let win = 0;
    for (let i = 0; i < 5; i++) {

        const playerSelection = 'pierre';
        const computerSelection = computerPlay();
        console.log(`le player a fais ${playerSelection} et l'ordinateur a fais ${computerSelection}`)
        let  y= playRound(playerSelection, computerSelection);
        console.log(y)
        if (y === 'Player win')
        { win += 1}



    }
    return `total victory ${win}`
}

console.log (game());
