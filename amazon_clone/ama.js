const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

function myfunc() {
    if(bar)
    {
        nav.style.right = "0px";
    }
}

function myfunc1() {
    if(close)
    {
        nav.style.right = "-300px";
    }
}