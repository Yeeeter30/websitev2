let count = 0;

function increase() {
    count++;
    
document.getElementById("counter").innerText = count;
}

function decrease() {
    count--;
    
document.getElementById("counter").innerText = count;
}

function reset() {
    if (count > 0) {
    count = 0;
    
document.getElementById("counter").innerText = count;
}
}

function copy() {

var copy = "https://roblox.com";

navigator.clipboard.writeText(copy)
}
