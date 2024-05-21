//Uppgigt 1
function writeName(){
    console.log("Elvira");
}
writeName();

// Uppgift 2
function area(height,width){
    return height * width;
}
console.log(area(10,20));

//Uppgift 3
function tvåTal(a,b){
    return a + b;
}
console.log(tvåTal(4,5));

//Uppgift 4
let c = 30;
let f = 0;
f = (c * (9 / 5)) + 32;

console.log("The value of the temperature in Fahrenheit is " + f);

// Uppgift 5
let area1=(x) =>{
    return x * 3;
}
console.log("Arean är: " + area1(6));

//Uppgift 6
let rotenUr = Math.sqrt(9);
console.log(rotenUr);

// Uppgift 7
let räknaAntal ="Hej! Jag heter Elvira och jag är bäst!".length;
console.log(räknaAntal);

//Uppgift 8
function kontrolleraNummer(number) {
    if (number % 2 === 0) {
        return "Jämnt";
    } else {
        return "Udda";
    }
}
console.log(kontrolleraNummer(5));
console.log(kontrolleraNummer(10));

//Uppgift 9
let text ="Jag är bäst";
    console.log(text.toUpperCase());

//Uppgift 10
let dubble = (x) => {
    return x * x;
}
console.log(dubble(3));