function Player(name){
    this.name = name;
    this.lvl = 1;
    this.points = 0;
};

Player.prototype.gainXp = function(nos){

    this.points += nos;

    if(this.points >= 10)
    {
        this.points -= 10;
        this.lvl += 1;
    }
};

Player.prototype.describe = function(){

console.log(this.name + " " + this.lvl + " " +  this.points);

};

const player1 = new Player('john');
console.log(player1);
console.log(player1.describe());

player1.gainXp(3);
player1.gainXp(5);
player1.gainXp(10);
console.log(player1.describe());