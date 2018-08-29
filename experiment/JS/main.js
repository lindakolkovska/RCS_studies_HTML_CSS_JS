// function addtext(){
//     var element = document.getElementById('btn')
// if (element.innerText == 'bar') {
//     element.innerText = 'foo';
// } else if (element.innerText == 'foo') {
//     element.innerText = 'baz';
// } else if (element.innerText == 'baz') {
//     element.innerText = 'bar';
// }
// }

// function main() {
//     var elements = document.querySelectorAll('#f1');
//     for (var i = 0; i < elements.length; i++); {
//         var element = elements[i];
//         var number = i + 1;
//         if (element.innerText == 'foo' + number) {
//             element.innerText = 'bar' + number;
//         } else {
//             element.innerText = 'foo' + number;

//         }
//     }
// }


function btn1() {
   var a = document.getElementById('x');
   var b = a.value;
   b = b - 5;
   a.value = b;
}
function btn2() {
    var c = document.getElementById('x');
    var d = c.value;
    d = d - 1;
    c.value = d;
 }
 function btn3() {
    var e = document.getElementById('x');
    var f = e.value;
    f++;
    e.value = f;
 }
 function btn4() {
    var g = document.getElementById('x');
    var h = g.value;
    var num = parseInt(h);
    num = num + 5;
    g.value = num;
 }

 