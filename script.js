function show() {
    var input = document.getElementById('search');
    var l = document.getElementById('it');
    input.addEventListener('focus', function () {
        l.style.display = 'block';
        l.style.opacity = '1';
    })
    input.addEventListener('click', function () {
        l.style.display = 'block';
        l.style.opacity = '1';
    })
    input.addEventListener('focusout', function () {
        setTimeout(function () { l.style.opacity = '0'; }, 0);
        setTimeout(function () { l.style.display = 'none' }, 200);

    })
}

function openPage() {document.getElementById('notext').innerHTML = "";
var x = document.getElementById("search").value.toUpperCase();
var ul = document.getElementById('list');
var li = ul.getElementsByTagName('li');
var f = 2;

for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName('a')[0];

    var textValue = a.textContent.toUpperCase();
    if (textValue.indexOf(x) > -1) {
        li[i].style.display = '';
    }
    else {
        li[i].style.display = 'none';
    }

    if (textValue.indexOf(x) == -1) {
        f++;
    }
    if (f > li.length) {
        document.getElementById('notext').innerHTML = "No results found";

    }
}
}
