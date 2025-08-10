let screen = document.getElementById('screen');

function addToDisplay(value) {
    if (screen.textContent === "0") {
        screen.textContent = value;
    } else {
        screen.textContent += value;
    }
}
function clearAll() {
    screen.textContent = "0";
}
function deleteLast() {
    if (screen.textContent.length === 1) {
        screen.textContent = "0";
    } else {
        screen.textContent = screen.textContent.slice(0, -1);
    }}
function calculateResult() {
    try {
        screen.textContent = eval(screen.textContent.replace(/÷/g, '/').replace(/×/g, '*'));
    } catch {
        screen.textContent = "Error";
    }
}
