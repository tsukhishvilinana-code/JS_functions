function castSpell(spellName){
    let result = "Casted: " + spellName;
    return result;
}

let attack = castSpell("Expelliarmus");
console.log (attack);

let hogwartsMana = 1000;

function healingRoom(){
    let roomMana = 200;
    let hogwartsMana = 5000;

    console.log(hogwartsMana);
}

healingRoom();
console.log(hogwartsMana);

console.log(roomMana);

const patronus = (animal) => {
    return "Expecto: " + animal;
}
console.log(patronus("Stag"));
