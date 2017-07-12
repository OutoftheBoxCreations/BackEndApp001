function GamePlayer() {
    this.name = "A Commoner as a Noob";
    this.life = 100;
    this.attackpower = 4;
    this.defencepower = 2;
    //this.healpower = 5;
    this.healfactor = 5 * 0.5;
    this.heals = function heals(targetPlayer) {
        targetPlayer.life += 1 * this.healfactor;
        console.log(this.name + " just healed " + targetPlayer.name + "by" + this.healfactor + "life_points");
    }
}

var Adi = new GamePlayer();
var Abhi = new GamePlayer();
var Intern_1 = new GamePlayer();

Adi.name = "Adi_TheBossMan";
Abhi.name = "Abhi_TheStriker";

GamePlayer.prototype.scolds = function scolds(targetPlayer) {
    targetPlayer.life -= (this.attackpower - targetPlayer.defencepower);
    console.log(this.name + " just scolded " + targetPlayer.name + ". \n" + targetPlayer.name + "'s Life just decreased to " + targetPlayer.life);
}

GamePlayer.prototype.mana = 50;

console.log("The Game Begins!" + "\n 1." + Adi + "\n 2." + Abhi + "\n 3." + Intern_1);
Abhi.scolds(Intern_1);
Adi.heals(Intern_1);
console.log("The Game Ends!\n Final Scores are:-" + "\n 1." + Adi + "\n 2." + Abhi + "\n 3." + Intern_1);