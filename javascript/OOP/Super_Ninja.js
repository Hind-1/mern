class Ninja {
    constructor(name){
        this.name=name;
        this.health=0; 
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log (`name:${ this.name }`);
    }
    showStats(){
        console.log (
`strength:   ${ this.strength }
speed:       ${ this.speed }
health:      ${ this.health }`);
    }
    drinkSake(){
        this.health+=10;
    }
}
class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health=200; 
        this.speed=100;
        this.strength=100;
        this.wisdom=100;
    }
    speakWisdom(){
        const message = super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }

}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
