const choices=document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard={
    player_1: 0,
    player_2:0
}
let currentPlayer = 1;
let player_1_Choice, player_2_Choice;

function play(e){
  restart.style.display='inline-block'
  const choice = e.target.id;
  if (currentPlayer === 1) {
      player_1_Choice = choice;
      currentPlayer = 2;
  } else {
      player_2_Choice = choice;
      currentPlayer = 1;
      const winner = getWinner(player_1_Choice, player_2_Choice);
      showWinner(winner,player_1_Choice,player_2_Choice);
  }
  console.log(player_1_Choice,player_2_Choice);
}
function getWinner(p1, p2) {
    if (p1 === p2) {
      return 'draw';
    } else if (p1 === 'rock') {
      if (p2 === 'paper') {
        return 'player_2';
      } else {
        return 'player_1';
      }
    } else if (p1 === 'paper') {
      if (p2 === 'scissors') {
        return 'player_2';
      } else {
        return 'player_1';
      }
    } else if (p1 === 'scissors') {
      if (p2 === 'rock') {
        return 'player_2';
      } else {
        return 'player_1';
      }
    }
  }
  
function getComputerChoice(){
    const rand=Math.random();
    if(rand<0.34){
        return 'rock';
    }else if(rand<=0.67){
        return 'paper';
    }else{
        return 'scissors';
    }
}

function showWinner(winner,player_1_Choice,player_2_Choice){
    if(winner==='player_1'){
        scoreboard.player_1++;
        result.innerHTML=`
        <h1 class="text-win">Player 1 won </h1>
        <i class="fas fa-hand-${player_2_Choice} fa-10px"></i>
        <p>Player 2 chose <strong>${player_2_Choice.charAt(0).toUpperCase()+player_2_Choice.slice(1)}  </strong> </p>
        
        `;
    }else if(winner==='player_2'){
        scoreboard.computer++;
        result.innerHTML=`
        <h1 class="text-lose">Player 2 won </h1>
        <i class="fas fa-hand-${player_1_Choice} fa-10px"></i>
        <p>Player 1 chose <strong>${player_1_Choice.charAt(0).toUpperCase()+player_1_Choice.slice(1)}  </strong> </p>
        `;
    }else{
        result.innerHTML=`
        <h1>It's a draw</h1>
        <i class="fas fa-hand-${player_2_Choice} fa-10px"></i>
        <p>Player 2 chose <strong>${player_2_Choice.charAt(0).toUpperCase()+player_2_Choice.slice(1)}  </strong> </p>
        `;
    }
    score.innerHTML=`
    <p>Player1 : ${scoreboard.player_1}</p>
    <p>Computer:${scoreboard.player_2}</p>
    `;
    modal.style.display='block';
}

function restartGame(){
    scoreboard.player_1=0;
    scoreboard.player_2=0;
    score.innerHTML=`
    <p>Player 1 : 0</p>
    <p>Player 2 : 0</p>
    
    `;


}

function cleaModel(e){
    if(e.target==modal){
        modal.style.display='none';
    }

}


choices.forEach(choice => choice.addEventListener('click',play));
choices.forEach(choice => choice.addEventListener('click',play));
window.addEventListener('click',cleaModel);
restart.addEventListener('click',restartGame);
