// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++
// }

// var i = 0;
// while (i < 10) {
//     i++;
//     console.log(i)
// }

// var i = 7;
// while (i < 10) {
//     console.log(i)
//     i++;
// }

// var i = 0;                  // i sākotnējā vērtība ir 0
// while (i <= 20) {           // kamēr vien i nav lielāks vai vienāds ar 20
//     if (i % 2 == 0) {       // un, to dalot ar 2, nav atlikuma
//     console.log(i);         // parādi man i vērtību
//     i++;                    // tad pieskaiti 1, pārbaudi, vai atbilst nosacījumiem, un dod rezultātu
//     }   
// }

// var i = 0;                  // STRĀDĀ ARĪ ŠIS VARIANTS
// while (i <= 20) {           
//     if (i % 2 == 0) {       
//     console.log(i);                           
//     }   
//     i++;
// }

// var i3 = 20;
// while (i3 >= 0) {
//     if (i3 % 2 !== 0) {
//     console.log(i3);
//     i3--;
//     }
// }

// var i = 20;
// do {                        //iedod komandu darīt
//     console.log(i);         // izdara šo darbību
//     i++;                    // tad pieskaita +1
// } while (i < 20); 

// for (var i = 0; i < 20; i++) { // izmanto skaitīšanai
//             console.log(i);
//     }

// var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw']; //index būtībā ir kkas pēc kārtas
// for (var index = 0; index < cars.length; index++) {
//     var car = cars[index];
//     console.log(car);
// }

// var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw'];       // ???
// var superCar = 'gaz';
// for (var index = 0; index < cars.lenght; index++) {
//     var car = cars[index]; {
//     if (car == superCar);}
//         console.log(car);

// }

// Fizz Bazz
// Uzrakstīt programmu, kas izskaita no 0 līdz 30.
// Ja skaitlis dalās bez atlikuma ar 2 (ir pāra skaitlis), tad izdrukā vārdu "Fizz"
// Ja skaitlis dalās bez atlikuma ar 3, tad izvada "Bazz"
// Ja bez atlikuma dalās ar abiem, tad izvada "Fizz Bazz"
// Ja nedalās bez atlikuma ar nevienu, tad izvada skaitli

// var i = 0;
// while (i <= 30) {
//     if (i % 2 == 0 && i % 3 == 0) {
//     console.log('Fizz Bazz');
//   } else if (i % 3 == 0) {
//     console.log('Bazz');
//   } else if (i % 2 == 0) {
//     console.log('Fizz');
//   } else if (i % 2 !== 0 && i % 3 !== 0) {
//     console.log(i);
// } i++;
// }

// for (var i = 0; i <= 30; i++) {
//     if (i % 2 == 0) {
//         console.log('Fizz');
//     } else if (i % 3 == 0) {
//         console.log('Bazz');
//     } else if (i % 2 == 00 && i % 3 == 0) {
//         console.log ('Fizz Buzz'); 
//     } console.log(i);
// }

// LABĀKAIS VARIANTS !!!!

// for (var i = 0; i <= 30; i++) {  // 
//     var output = '';             // nodefinē output
//     if (i % 2 === 0) {           // nosacījums, ka jābūt pāra skaitlim
//         output = 'Fizz ';        // aiz Fizz jābūt atstarpei
//     } if (i % 3 === 0) {         // nosacījums, ka jābūt nepāra skaitlim
//         output += 'Buzz';        // 
//     } if (output === '') {
//         output = i;
//     }
//     console.log(output);
// }
    
// var x = 0;
// while (x < 6) {
//   x++;
// }
// console.log(x);

// var sum = 0;
// for(i=4; i<8; i++) {
//   if (i==6) {
//     continue;
//   }
//   sum += i;
// }
// console.log(sum);

// var day_of_week = 4;
// switch(day_of_week) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   console.log("Working Days");
//   break;
//   case 6:
//   console.log("Saturday");
//   default:
//   console.log("Today is Sunday");
//   break;
// }

// var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw']; //index būtībā ir kkas pēc kārtas
//     console.log(cars[3]);

    var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw']; //index būtībā ir kkas pēc kārtas
for (var index = 0; index < cars.lenght; index++) {
    car = cars[index];
    if (index == 2) {               // ja vajag, lai izdruka visus, izņemot vienu, tad pieraksts ir --- if (index != 2)
    console.log(car);               // esošais pieraksts 
    }
}