function buttonClick() {
    var element = document
    //.getElementById('some-paragraph');
    //.getElementByClassName
    .querySelector( '#some-paragraph');
    if (element.innerText == 'foo') {
     element.innerText = 'bar';
    } else {
     element.innerText = 'foo';
    }
    //setTimeout(buttonClick, 1000);
 }
 //setInterval(buttonClick, 500);
 function checkParagraphContent() {
    var elements = document.querySelectorAll('.other-paragraph');
    for (var i=0; i < elements.length; i++) {
        var element = elements[i];
    
        if (element.innerText == 'foo') {
            element.innerText = 'bar ';
           } else {
            element.innerText = 'foo';
           }
    }
 }

 function add(num) {
    var number = document.
        querySelector('#number');
    var currentValue = parseInt(number.innerText);
    element.innerText = currentValue + num;
 }