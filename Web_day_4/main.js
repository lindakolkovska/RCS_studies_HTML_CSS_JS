var someNumber = 123; //integer
var someDecimal = 3.14; //float - nozīmē, ka kkur iekšā skaitlī ir komats
var someWord = 'Hello world'; //string = teksts; var rakstīt gan '' (izvēlas šo), gan "", gan ``(ES6 kodā)
var someTrue = true; // boolean (sarunvalodā bool) - true vai false
var someNothing = null; // null (nil) mainīgais bez vērtības

var someArray = [
    'vaz', 
    'zaz',
    'gaz',
    'maz',
    'bmw',
    1, 
    3.14,
    true,
]; // array - masīvs; sevī ietver vairākas lietas

var johnny = {
    name: 'Johnny',
    surname: 'Doe',
    fullName: 'John Doe',
    age: 21, 
}; // object - tiek definēts objekts no a-z; name = atslēga; Johnny = vērtība; ja atslēga ir 2 vārdi, tos jāliek ''
// uz konsoli sūtam pēc tam, kad ir nodefinēti mainīgie
// ja kāda no atslēgām ir apzīmēta ar 2+ vārdiem, tad log.(johnny["full name"])
//svarīgi lielie/mazie burti - nejaukt, neatpazīs

// var a = 'foo'
// console.log(a);
// a = 'bar';
// console.log(a);
// a = 'baz';
// console.log(a);
// a = 1;
// console.log(a);
// a = 2;
// console.log(a);
// a = 3;
// console.log(a);

// console.log(1 + 1);
// console.log(2 + 2 * 2);
// + - * / (operatori)

// var number1 = 2;
// var number2 = 4;
// console.log(1 + 1);
// console.log(2 + 2 * 2); // 6
// console.log(number1 + number2);
// console.log(number1 + 3);
// var number3 = number1 - number2;
// console.log(number3);
// console.log((2 + 2) * 2); //8
// number1 = number1 + 1;
// number1 += 1;
// number1++; //pacels tikai par 1
// ++number1;
// --number1;
// console.log(number1);

// console.log(1 / 0);

// console.log(5 % 2); // % ir dalīšanas atlikums

// console.log('foo ' + 'bar') // lai starp foo un bar būtu atstarpe, pēc foo un pirms ' jāieliek atstarpe
// console.log(1 + '1'); // =11
// console.log('1' + 1); // =11

// nosacījumi:
// ==
// != (! bieži nozīmē NOT)
// > lielāks
// < mazāks
// >= lielāks vai vienāds
// <=
// === strict comparison (eaqual)
// !== strict comparison (not eaqual)

// if (1 = 1) {
//     console.log('was true');
// } else {
//     console.log('was not true');
// }

// var name = 'Anna';

// if (name == 'Anna') {
//     console.log('Čau, Anna');
// } else if(name == 'Jānis') {
//     console.log('Whats up, Jānis');
// } else {
//     console.log('Nepazīstu Tevi');
// }




// ja izmanto vienu = ; tad es vnk pasaku, ka pie atslēgas ir KKĀDA vērtība
// [] pielieto masīvā
// {} pielieto objektam un funkciju blokiem, if blokiem etc.
// () izsauc f-ju vai parametri if'iem

// var a = 1;
// var b = 2;
// var c = 3;

// and = && ir 'un'
// vai = || = or
// if (a == 1 && b == 3 || c == 3) {
//     // ja gribas 'vai' pievienot kkam 
// } 
// var name = 'Linda';
// if (name == 'Jānis' 
// || name == 'Kārlis' 
// || name == 'Zane' ) {
//     console.log('Čau, zināmais cilvēk');
// } else {
//     console.log('Nepazīstu Tevi');
// }

// var name = 'Kārlis';
// switch (name) {
//     case 'Jānis':
//         console.log('Čau, zināmais cilvēk');
//         break;
//     case 'Kārlis':
//         console.log('Čau, zināmais cilvēk');
//         break;
//     case 'Zane':
//         console.log('Čau, zināmais cilvēk');
//         break;
//     default:
//         console.log('Nepazīstu Tevi');
// }

// var name = 'Kārlis'
// switch (name) {
//     case 'Jānis':
//     case 'Kārlis':
//     case 'Zane':
//         console.log('Čau, zināmais cilvēk');
//     default:
//         console.log('Nepazīstu Tevi');
// }


// break - nozīmē, ka tiek pārtraukta iepriekšējā nosacījumu ķēde; ""default"" darbojas tikai ar ""break"""

// CIKLI !!!!!!!!!!! //

// while ir if statement, kas izpildīsies atkārtoti

// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }
// lai tiktu ārā no uzkāriena, kad programma raksta un nepārstāj, ir CTRL+C

// var i = 0;
// while (i < 10) {
//     if (i < 5) {
//     console.log(i);
//     }
//     i++;
// }
// console.log(i);

// var i = 0;
// while (i <= 20) {
//     console.log(i);
//     i=i + 2;
// }
// VAI ARĪ
// while (i < 20) {
//     console.log(i);
//     i += 2
// }

// var i = 0;
// while (i <= 20) {
//     if (i % 2 == 0) {
//     console.log(i);
//     }
//     i++;
// }



// var i = 20;
// while (i <= 20) {
//     console.log(i);
//     i=i - 2;
// }
// console.log(i)

// var i3 = 20;
// while (i3 >= 0) {
//     console.log(i3);
//     i3--;
// }
// pamainot i3-- atrašanās vietu pirms console.log(i3), tad paņems nepāra skaitļus

// var i = 0;
// while (i < 20) {
//     if(i == 5) {
//         break;
//     }
//     console.log(i);
//     i++;
// }console.log(i);

// var i = 0;
// while (i < 20) {
//     i++;
//     if(i == 5) {
//         continue;
//     }
//     console.log(i);
// }console.log(i);

// CIKLI = LOOP !!!!!! ITERĀCJA IR 1 CIKLA POSMS

// var i = 20;
// do {                        //iedod komandu darīt
//     console.log(i);         // izdara šo darbību
//     i++;                    // tad pieskaita +1
// } while (i < 20);           // tad pārbauda, vai tas +1 ir i<20, kas nav

// for (var i = 0; i < 20; i++) { // izmanto skaitīšanai
//         console.log(i);
// }

// for (var i = 20; i > 0; i-- ) {      lai dabūtu no 20 līdz 1
//     console.log(i);
// }

// var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw']; //index būtībā ir kkas pēc kārtas
// for (var index = 0; index < cars.length; index++) {
//     var car = cars[index];
//     console.log(car);
// }

// var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw']; //index būtībā ir kkas pēc kārtas
// for (var index = 0; index < 1; index++) {
//     car = cars[3];
//     console.log(car);
// }
// MANS VARIANTS, KAS IR ČĪTS

// var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw']; //index būtībā ir kkas pēc kārtas
// for (var index = 0; index < cars.lenght; index++) {
//     car = cars[index];
//     if (index == 2) {               // ja vajag, lai izdruka visus, izņemot vienu, tad pieraksts ir --- if (index != 2)
//     console.log(car);               // esošais pieraksts 
//     }
// }

var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw']; 
var superCar = 'gaz';
    if (cars[1] == superCar) {
        console.log(true);
    } else {
        console.log(false);
    }
}

//FUNKCIJAS !!!!!!!!!

// function addTwoNumbers(number1, number2) {
//     return number1 + number2;                   //return = ar šo mēs pasakām, ka vajag mums atdot rezultātu
// }
// console.log(addTwoNumbers(2, 3));

// addTwoNumbers(2, 3);
// function addTwoNumbers(number1, number2) {
//    var sum = number1 + number2;
//    console.log(sum);                 
// }

// f-ja saņem 2 parametrus - cilv.vārdu un vecumu
// Ja saņem parametru Kārlis, 50
// Čau, Kārli, Tev ir 50 gadi


function parametri(name, age) {
    console.log('Čau,' + name + ' Tev ir ' + age + ' gadi')
    return name, age;
}
parametri('Anna', 29);
parametri('Lūsija', 89);
parametri('NSJRNGOJRNG', 468);


