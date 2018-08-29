// alert('Hello World'); // izmet logu, kad atver mājaslapu, kas jāapstiprina
// dom - termins, kas apzīmē veidu, kas redz HTML
// JS redz HTML kā objektu ar atribūtiem (lang) un bastardiem (head un body)
// window objekts ir browser lapa
// document objekts ir HTML dokuments

// console.log(window);
// console.log(document.childNodes);

// function buttonClick() {
//     var element = document
//     .getElementById('some_paragraph')
// console.log(element.innerHTML); // ja grib manipulēt ar HTML failu
// console.log(element.innerText); // ja gribmanipulēt tikai ar tekstu

// --uzdevums
// if (element.innerText == 'foo') {
//        element.innerText = 'bar';// šis ir tas pats, kas garais
//    } else {
//        element.innerText = 'foo';
//    }
// --HTML events ir nodefinētie uzdevumi, ko mēs savienojam ar JS
// --rekursija - f-ja izsauc pati sevi; 
// setInterval(buttonClick, 500);
// ja šo setTimeout jada jada iznes ārā, viņš mainās pats no sevis, neko nespiežot
//set interval

// function buttonClick() {
//     var element = document
//         .querySelector('#some_paragraph');   //raksta iekšā CSS selector
//     if (element.innerText == 'foo') {
//         element.innerText = 'bar';      // šis ir tas pats, kas garais
//     } else {
//         element.innerText = 'foo';
//     }
// }
    // console.log(document.querySelector('.other-paragraph'));
// function checkParagraphContent() {
//         var elements = document.querySelectorAll('.other-paragraph');
//         for (var i = 0; i < elements.length; i++) {
//             var element = elements[i];
//             console.log(element);
//         }
//     }

// function checkParagraphContent() {
//     var elements = document.querySelectorAll('.other-paragraph');
//     for (var i = 0; i < elements.length; i++); {
//     var element = elements[i];
//     var number = i + 1;
//     if (element.innerText == 'foo' + number) {
//         element.innerText = 'bar' + number)
//     } else {
//         element.innerText = 'foo';
//     }
// }
// }
// function add(number) {
//     var element = document.getElementById('number');
//     var currentValue = parseInt(element.innerText);
//     element.innerText = currentValue + number;
// }

// var count = 0;
// function addcount() {
//     count++;
//     document
//     .getElementById('counter')
//     .innerText = count;
// }

// var result = confirm("Do you really wanna leave this page?");
// if (result == true) {
//   alert("Thanks for visiting");
// } else {
//   alert("Thanks for staying");
// }

// function isAnagram(str1, str2) {
//     str1 = str1.replace(' ', '').split('').sort().join('');
//     str2 = str2.replace(' ', '').split('').sort().join('');
//     return str1 == str2;
// }
// console.log('sula ' + isAnagram('sula', 'alus'));
// console.log('abba ' + isAnagram('abba', 'baab'));
// console.log('cool ' + isAnagram('cool', 'loop'));
// console.log('a b a ' + isAnagram('a b a', 'b a a'));

// jānoņem atstarpes

// function buttonClick1() {
//         var element = document
//             .getElementById('first');   //raksta iekšā CSS selector
//         if (element.innerText == 'bar') {
//             element.innerText = 'foo';      // šis ir tas pats, kas garais
//         } else {
//             element.innerText = 'bar';
//         }
//     }

// function buttonClick2() {
//     var element = document.getElementById('iwiwf')
//     console.log(element.innerText);
//     if (element.innerText == 'bar') {
//         element.innerText = 'foo';
//     } else if (element.innerText == 'foo') {
//         element.innerText = 'baz';
//     } else {
//         element.innerText = 'bar';
//     }
//     }

function isAnagram(ab, xy) {
    ab = ab.split
}