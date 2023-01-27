
let cards=[];
let hasBlackJack=false;
let isAlive=true;
let sum =0; 
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");

let player={name:"Qotayba",chips:145}

let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name+": $"+player.chips;

function startGame(){
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
     cards=[firstCard,secondCard];
     sum =firstCard+secondCard;
     hasBlackJack=false;
     isAlive=true;


    renderGame();
}
function renderGame(){
 let message;   
if(sum<21){
    message="Do you want to draw a new card";

}
else if(sum===21){
    message="you have got a blackJack";
    hasBlackJack=true;
}
else if(sum >21){
    message="you lost";
    isAlive=false;
}

messageEl.textContent=message; 
sumEl.textContent="Sum: "+sum;
cardsEl.textContent="Cards:"
for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += " "+cards[i];
    
}  
}
function getRandomCard(){
    let random=Math.floor(Math.random()*13)+1;
    if (random===1){
        return 11;
    }
    if (random>=11&&random<=13){
        return 10;
    }
    return random;
}
function newCard (){
    if (!hasBlackJack&&isAlive){
    let card =getRandomCard();
    sum+=card;
    cards.push(card);
    renderGame();
}
}