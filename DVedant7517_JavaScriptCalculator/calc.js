// Function to add to display
function addChar(input, character) {
    if (input.value == null || input.value == "0")
        input.value = character
    else
        input.value += character
}
// Function to Calculate Pi 
function pi(value) {
    if (display.value == null || display.value == 0)
        display.value = 3.14159265;
    else
        display.value = (display.value * 3.14159265).toFixed(8);
}
// Function to Calculate Cos Value
function cos(value) {
    display.value = Math.cos(display.value).toFixed(8);
}
// Function to Calculate Sin Value
function sin(value) {
    display.value = Math.sin(display.value).toFixed(8);
}
// Function to Calculate Tan Value
function tan(value) {
    display.value = Math.tan(display.value).toFixed(8);
}
// Function to Calculate Square Root
function sqrt(value) {
    display.value = Math.sqrt(display.value).toFixed(8);
}
// Function to Calculate Log Value
function ln(value) {
    display.value = Math.log(display.value).toFixed(8);
}
// Function to Calculate Expon
function exp(value) {
    display.value = Math.exp(display.value).toFixed(8);
}
// Function to a Delete Character/Entry From Display
function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;

// Function to Calculate Percentage
function percent(value) {
    if (display.value == null || display.value == 0)
        display.value = display.value
    else
        display.value = display.value / 100
}

function changeSign(input) {
    if (input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length)
    else
        input.value = "-" + input.value
}

function compute(value) {
    display.value = eval(display.value);
}

// Function to Compute Square
function square(value) {
    display.value = eval(display.value) * eval(display.value)
}

function checkNum(str) {
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch < "0" || ch > "9") {
            if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "." &&
                ch != "(" && ch != ")" && ch != "%") {
                alert("invalid entry!")
                return false
            }
        }
    }
    return true
}