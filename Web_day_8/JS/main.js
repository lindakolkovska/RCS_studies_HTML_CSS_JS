// JA NEPIECIEŠAMS PIEVIENOT POGAI F-JU, KA MAINĀS HTML MANIS NODEFINĒTAIS LIELUMS

// document
// .getElementById('some')                     // attiecas uz HTML button; uzrādu to, kas ir jāmaina
// .addEventListener('click', changeParagrapgTExt); // pieraksts = 'click' darbība + f-jas nosaukums

// function changeParagrapgTExt() {
//     var el = document.getElementById('super'); // attiecas uz HTML <p>; atlasu, kur jāparāda rezultāts
//     if (el.innerText == 'btn') {
//         el.innerText = 'bar';
//     } else {
//         el.innerText = 'btn';
//     }
// }
// salīdzinot ar iepriekšējo f-ju, iztiek bez for un papildus var

// ANONĪMA F-JA
// document
// .getElementById('some')                     // attiecas uz HTML button; uzrādu to, kas ir jāmaina
// .addEventListener('click', function() {    // pieraksts = 'click' darbība + f-jas nosaukums
//     var el = document.getElementById('super'); // attiecas uz HTML <p>; atlasu, kur jāparāda rezultāts
//     if (el.innerText == 'btn') {
//         el.innerText = 'bar';
//     } else {
//         el.innerText = 'btn';
//     }
// });

// JS FRAMEWORK
// jQUERY (var taisīt arī animācijas)

// tā pati f-ja, kas ieriekš tikai jQuery
// jQuery - lai nerakstitu jQuery liek $
// $('#some').click(function(){  // document..getElementById('some')..addEventListener('click', function()
// if ($('.super').html() == 'btn') {   // this nozīmē poga; text nevis innerText
//     $('.super').html('foo');        // text f-ja dara 2 lietas - dabūs tekstu (ja nekas nav pielikts klāt) vai uzsetos
// } else {
//     $('.super').html('btn');
// }
// });                       

// $('#some').hover(function () {
//     if ($('.super').html() == 'btn') {
//         $('.super').html('foo');
//     } else if ($('.super').html() == 'foo') {
//         $('.super').html('baz');
//     } else ($('.super').html() == 'baz') {
//         $('.super').html('btn')
//     }
// });

// $('#some').click(function(){
//     $('.super').each(function(i){       // i ir jābūt gan pie each un console.log
//         console.log(i);
// });
// });

// $('#some').click(function(){                // kas jāaktivizē, lai parādītos izmaiņas
//     $('.super').each(function(zilonis){     // kuram el mainīsies vērtības (each - katram)
//         var num = zilonis + 1;              // nodefinē num, lai pēc tam var pielikt klāt pie <p> nosaukuma
//         if ($(this).html() == 'foo ' + num) {   // ja <p> (this) ir ar txt
//             $(this).html('bar ' + num);
//         } else if ($(this).html() == 'bar ' + num) {
//             $(this).html('baz ' + num);
//         } else {
//             $(this).html('foo ' + num);
//         }
//     });
// });

// VAI!!!
// $('#some').click(function(){               
//     $('.super').each(function(){     
//         var num = $(this).attr('data-number');              
//         if ($(this).html() == 'foo ' + num) {   
//             $(this).html('bar ' + num);
//         } else if ($(this).html() == 'bar ' + num) {
//             $(this).html('baz ' + num);
//         } else {
//             $(this).html('foo ' + num);
//         }
//     });
// });

// $('#some').click(function(){                          
//         if ($('.super span').html() == 'foo') {   
//             $('.super span').html('bar');
//         } else if ($('.super span').html() == 'bar') {
//             $('.super span').html('baz ');
//         } else {
//             $('.super span').html('foo ');
//         }
// });

// LAI PAZUSTU PĒC CLICK
// HIDE
$('#some').click(function(){                          
    if ($('.super span').html() == 'foo') {   
        $('.super span').html('bar');
    } else if ($('.super span').html() == 'bar') {
        $('.super span').html('baz ');
    } else {
        $('.super span').html('foo ');
    }
});

// $('#some-other').click(function () {
//     $('.super').hide(2000);
// });

// $('#some-other1').click(function () {
//     $('.super').show();
// });

// $('#some-other1').click(function () {
//     $('.super').slideup(2000);
// }); // tas pats, kas hide

// $('#some-other').click(function () {
//     $('.super').toggle(2000);
// }); // ar 1 click - pazūd; ar 2.click - parādās

// KALKULATORS
$('.add').click(function() {
    var action = $(this).attr('data-action');
    var currentNumber = $('#some-input').val(); //dabūn esošo vērtību
    var newValue= parseInt(currentNumber) + parseInt(action);
    $('#some-input').val(newValue);
});