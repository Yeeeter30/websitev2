let count = 0;

function increase() {
    count++;
    
document.getElementById("counter").innerText = count;
}

function decrease() {
    if (count > 0) {
    count--;
    
document.getElementById("counter").innerText = count;
}
}

function reset() {
    count = 0;
    
document.getElementById("counter").innerText = count;
}

function copy() {

var copy = "https://roblox.com";

navigator.clipboard.writeText(copy)
}

function doit() {
    document.getElementById("test").innerHTML = "No robux for you";
}

function time() {
    document.getElementById("time1").innerHTML = Date()
}
