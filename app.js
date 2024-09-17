// 1.feladat
elso = "kecske"
masodik = "sajt"

console.log(elso+masodik);

// 2.feladat
eredetiAr=17500
aremeles = 8.7

uj = eredetiAr *(1+(aremeles/100))

// 3.feladat
i = 0;

while(i <100){
    console.log("Laci");
    i++;
}

// 4.feladat
szam = 4;
console.log(Math.pow(szam,2))

// 5.feladat
eleje = 42
vege = 100

for(let i = eleje; i < vege; i+=2){
    console.log(i);
}

// 6.feladat
osszes = 5
kerdesek = 8
elso = 2

korok = Math.floor(kerdesek/osszes)

console.log(kerdesek - (korok*osszes) - 1 + elso)

// 7.feladat
szam = 47
nyertel = true;
for(let i = 2;i<szam-1/2;i++){
    if(47%2==0){
        console.log("Nem nyertel");
        nyertel = false;
        return;
    }
}
if(nyertel){console.log("grat!")}


// 8.feladat
pont = 1

switch(true){
    case (0 < pont && pont <= 49): console.log("Elégtelen (1)!"); break;
    case (50 < pont && pont <= 62): console.log("Elégséges (2)!"); break;
    case (62 < pont && pont <= 75): console.log("Közepes (3)!"); break;
    case (75 < pont && pont <= 88): console.log("Jó (4)!"); break;
    case (88 < pont && pont <= 100): console.log("Jeles (5)!"); break;
    default: console.log("gatya...?");
}

// 9.feladat
const szorzas = (x) => {
    for(let i =1; i <= 10; i++){
        console.log(x*i);
    }
}

for(let i = 1; i <= 10; i++){
    szorzas(i);
}

// 10.feladat
magassag = 50
//     *
//    ***
//   *****
//  *******
// *********
for(let i = 0;i<=magassag;i++){
    console.log(" ".repeat(magassag-i) + "*".repeat(i*2+1))
}
// 11.feladat
a = 5
b = 10
muvelet = "*"

switch(muvelet){
    case "+": console.log(a + b); break;
    case "-": console.log(a - b); break;
    case "*": console.log(a * b); break;
    case "/": if(b !== 0){console.log(a / b);}else{console.log("a 7szaz at!!!!!");} break;
}
// 12.feladat
let jegyek = [1,4,3,4,4,4,5,2,3]

atlag = 0

// jegyek.forEach(x => atlag += x);
jegyek.filter(x => {atlag+=x;return true;})
console.log(jegyek.length)
// atlag /= jegyek.length();

console.log(atlag / jegyek.length);
// 13.feladat
// 14.feladat
// 15.feladat
// 16.feladat
// 17.feladat
// 18.feladat
