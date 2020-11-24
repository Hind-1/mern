class Ninja {
    constructor(name){
        this.name=name;
        this.health=0; 
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        // `name:${ this.constructor.name }`;
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
// class Sensi {
//     constructor(name,health,speed,strength){
//         this.name=name;
//         this.health=200; 
//         this.speed=3;
//         this.strength=3;
//     }
const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1)