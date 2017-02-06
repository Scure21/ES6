class Character {
  constructor (attackPower, health){
    this.attackPower = attackPower;
    this.health = health;
  }
  //methods
  attack(opponent) {
    // function to attack oponent if Math.random() > 0.5
    if (Math.random > 0.5) opponent.health =- 1
  }
}


class Blue extends Character{
  constructor(attackPower, health){
    super(attackPower, health);
  }
  //methods
}


class Red extends Character {
  constructor(attackPower, health){
    super(attackPower, health);
  }
  //methods
}


//rewriting map with arrow function
var winnerArr = ['red', 'red', 'blue', 'blue', 'red'];

winnerArr.map((item, index)=>console.log({winner: item}));

//let and const
let foo = 'bar';
console.log(foo);

