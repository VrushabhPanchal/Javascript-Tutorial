function sum(...number){
    let result = 0;
    for (const element of number) {
        result += element;
    }
    return result;
}
function avrage(...number){
    let result = 0;
    for (const element of number) {
        result += element;
    }
    return result / number.length;
}

function combineStrings(...strings){
    return strings.join(" ");
}

const total = sum(1,2,3,4,5,6);
const avg = avrage(1,2,3,4,5,6);
const fullName = combineStrings("Mr.","vrushabh","panchal");
console.log("Your total is " + total);
console.log("Your Avrage is " + avg);
console.log(fullName);

function openFridge(...food){
    console.log(...food);
}

function getFood(...foods){
    return foods
}


const food1 = "pizza";
const food2 = "burgur";
const food3 = "fafda";
const food4 = "jalebi";
const food5 = "bhel";

openFridge(food1,food2,food3,food4,food5);

const food = getFood(food1,food2,food3,food4);

console.log(food);
