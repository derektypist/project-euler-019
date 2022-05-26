// Function to Get Information (including Invalid Input)
function getInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Values of the Input Fields
    let num1 = document.getElementById("myyear1").value;
    let num2 = document.getElementById("myyear2").value;
    // Check if inputs are valid
    if (isNaN(num1) || isNaN(num2) || num1.toString().length == 0 || num2.toString().length == 0 || num1<1901 || num1>2099 || num2<1902 || num2>2100 || !Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2)) || num2<num1) {
        
    }
}