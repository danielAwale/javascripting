const args = process.argv.slice(2);
console.log(Number(args));

const rollDice = function(diceRoll){
let output = '';
for(let i = 0; i < Number(diceRoll); i++){
  output += Math.floor(Math.random() * 6) + 1 + ', ';
}
return `Rolled ${Number(diceRoll)} dice: ${output.slice(0,-2)}`;
}

console.log(rollDice(args));