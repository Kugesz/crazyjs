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

if(0< pont <= 49){
    console.log("Elégtelen (1)");
}else if(pont<=62){
    console.log("Elégséges (2)");
}else if(pont<=75){
    console.log(Közepes (3));
}else if(pont <=88){
    console.log(Jó (4))
}else if(pont <= 100){
    console.log("Jeles (5)");
}else{
    console.log("Ervenytelen");
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
magassag = 5

for(let i = 1;i<=5;i++){
    console.log([" " * space].join("") + ["*" * i].join())
}
// 11.feladat
// 12.feladat
// 13.feladat
// 14.feladat
// 15.feladat
// 16.feladat
// 17.feladat
// 18.feladat
