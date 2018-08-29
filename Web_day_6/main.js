// pure functions - saņem datus un atgriež rezultātu

// side effects functions - kko izdara un izbliež uz āru

// function isEven(a) {            // sākumā ir iedots info par to, ka būs f-ja ar nosauk.isEven un mainīgo (a)
//     if (a == 4) {               // pie nosacījuma, ka a ir vienāds ar 4
//     console.log(true);          // izmet konsolē man 'true'
//  } else {                       // ja jebkas cits
//      console.log(false);        // izmet konsolē man 'false'
// }
// }
// isEven(3);                      // iedodu ciparu 3


// function isEven(a) {                     // pārbaudīt mājās !!!
//     if (a % 2 == 0) {
//     return true;
//     } else {
//     return false;
//     }
// }
// console.log('2 is even' + isEven(2))


// function isEven(x) {
//     if (x % 2 == 0) {
//     return true;
// } else {
//     return false;
// }
// }
// console.log('vērtība dalās ar 2 ' + isEven(4))
     

// ĪSĀKS PIERAKSTS
// function isEven(a) {
//     if (a % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// VĒL ĪSĀKS PIERAKSTS !!!
// function isEven(a) {
//         return a % 2 == 0;
//     }
// console.log('a 2 is even ' + isEven(2))


// function isEven(a) {                     
//     if (a % 2 == 0); {
//     return 'is even';
//     } else {                            // nepatīk kkas ar 'else' - dunno
//     return 'is odd';
//     }
// }
// console.log('a 2 is even' + isEven(2))


// if (name == 'Anna') {
//     console.log('Čau, Anna');
// } else if(name == 'Jānis') {
//     console.log('Whats up, Jānis');
// } else {
//     console.log('Nepazīstu Tevi');
// }

// function isEven(a) {         
//     return a % 2 == 0 ? ' is even' : 'is odd'; // ? uzdod jautājumu ar pēc "?" zīmes esošām atbildēm 'is even' (ja tas ir patiesi) : 'is odd' (ja nav taisnība)
// }            
// console.log('number 2 ' +  isEven(2));

// function isEven(a) {
//     if (a % 2 == 0 && a % 3 == 0) {
//     return 'Fizz Buzz';
//     } else if (a % 2 == 0) {
//         return 'Fizz';
//     } else if (a % 3 == 0) {
//         return 'Buzz';
//     } else (a)
// } 

// function fizzBazz(i) {              
//     var output = '';
//     if (i % 2 === 0); {
//         output = 'Fizz';
//     }
//     if (i % 3 === 0) {
//         output += 'Buzz';
//     }
//     if (output === '') {
//         output = i;
//     }
//     return output;
// }

// console.log(fizzBazz(3));
// console.log(fizzBazz(7));
// console.log(fizzBazz(15));
// console.log(fizzBazz(18));

// mainīgais var būt f-ja


// var isEven2 = function(number){
//     return number % 2 == 0 ? ' is even' : 'is odd';
// }
// console.log('number 2 ' + isEven2(2));
// console.log('number 3 ' + isEven2(3));
// console.log('number 4 ' + isEven2(4));
// console.log('number 5 ' + isEven2(5));
// console.log('number 2234521545 ' + isEven2(2234521545));

// var cat = {                  // cat ir klase (class)
//     name: 'Muris',          //name - īpašība (protperty) iekš objekta
//     hunger: 10,
//     feed: function(){
//         this.hunger--;      // tas pats ārpus šī objekta kastītes būtu cat.hunger += 2 (vai -= 2), bet tas ir slikts stils
//     }
// }
// console.log(cat);
// cat.feed();
// console.log(cat);

// console.log(Math.PI);
// DATUMI //
// var now = new Date(); // nav daudz objektu ar 'new'; 
// console.log(now); // Griniča nav 0 time zone; UTC

// js'ā viss ir objekti (arī string, masīvi etc.)
// lenght - simbolu skaits
//indexOf - pasaka, kurā pozīcijā atrodas konkrētais lielums; atrod tikai pirmo pozīciju;
// ar if'iem un index'iem uzmanīgi, ja ir tikai 1 elements, jo viņš uzskatīs, ka 1.el. ir 0, bet if'am 0 ir false
// split pārvērš stringu par masīvu, lai varētu apgriezt otrādi, jāizveido string par masīvu, lai varētu to apgriezt otrādi
// split ir pieejams tikai string vai masīva objektam
// var foo = 'bar';
// console.log(foo.split(''));
// console.log(foo);

//metode, kas paņems 2 parametrus un sapratīs, vai ir iekšā strigā

// MASĪVI //
// array methods - masīvu metodes //
// pie masīvu f-jām tiek izmainīti masīvu elementi

//MD - f-ja, kas kā parametru saņem 1 vārdu un atgriež šo vārdu spoguļrakstā
//MD - uztaisīt f-ju, kas parametrus saņem tektu un atgriež true vai false vai šis teksts ir palindroms
//

// console.log('Cover'.split('').reverse('').join(''));
// function reverseString(str) {
//     return str.split("").reverse().join(""); // ar split pārveido par masīvu / ar reverse mēs dabūnam spoguļrakstu / join ņem vienu parametru un savieno ar citu
// }
// console.log(reverseString("Cover"));

// function palindroms(text) {
//     text2 = function rs(text) {
//         return text.split('').reverse().join(''); 
//     }
//     if (text === text2) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(palindroms('anna'));

// function isPalindrom(word) {
//     return word == reverseString(str);
// }
// console.log(isPalindrom'anna')