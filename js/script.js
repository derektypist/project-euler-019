// Function to Get Information (including Invalid Input)
function getInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Values of the Input Fields
    let num1 = document.getElementById("myyear1").value;
    let num2 = document.getElementById("myyear2").value;
    // Check if inputs are valid
    if (isNaN(num1) || isNaN(num2) || num1.toString().length == 0 || num2.toString().length == 0 || num1<1901 || num1>2099 || num2<1902 || num2>2100 || !Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2)) || num2<=num1) {

        // Set Condition for Not a Number
        if (isNaN(num1) || isNaN(num2)) {
            // Condition if first input is not a number
            if (isNaN(num1)) txt += `Invalid Input.  The first year must be a number.`;
            // Condition if second input is not a number
            if (isNaN(num2)) txt += `Invalid Input.  The second year must be a number.`;
        }

        // Set Condition for Empty Inputs
        if (num1.toString().length==0 || num2.toString().length==0) {
            // Condition if first input is empty
            if (num1.toString().length==0) txt += `Invalid Input.  First Year not entered.`;
            // Condition if second input is empty
            if (num2.toString().length==0) txt += `Invalid Input.  Second Year not entered.`
        }

        // Set Condition if First Year is not in range
        if (num1<1901 || num1>2099) txt += `Invalid Input.  First Year must be between 1901 and 2099.`;

        // Set Condition if Second Year is not in range
        if (num2<1902 || num2>2100) txt += `Invalid Input.  Second Year must be between 1902 and 2100.`;

        // Set Conditions for Number not an Integer
        if (!Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2))) {
            // Set Condition if First Year is a number, but not an integer
            if (!Number.isInteger(Number(num1))) txt += `Invalid Input.  First Year is not a whole number.`;
            // Set Condition if Second Year is a number, but not an integer
            if (!Number.isInteger(Number(num2))) txt += `Invalid Input.  Second Year is not a whole number.`;
        }

        // Set Condition if the second year is not later than the first year
        if (num2<=num1) txt += `Invalid Input.  The Second Year must be later than the First Year.`;
    } else {
        txt += `Your Inputs: <p>`;
        txt += `First Year - ${num1} <p>`;
        txt += `Second Year - ${num2} <p>`;
        txt += `${countingSundays(num1,num2)} Sundays fell on the first month between ${num1} and ${num2}.`;
    }

    // Display Information in the Browser
    document.getElementById("yearsinfo").innerHTML = txt;
}

/*
     Function to return the Number of Sundays that fell on the first of the
     month during the given years
     countingSundays(1943,1946) returns 6
     countingSundays(1995,2000) returns 10
     countingSundays(1901,2000) returns 171
*/
function countingSundays(firstYear,lastYear) {
    function isLeapYear(year) {
        return year % 4 == 0 && (year % 100 !==0 || year % 400 === 0);
    }

    function daysInMonth(month,year) {
        switch (month) {
            case 0: return 31;
            case 1: return isLeapYear(year) ? 29 : 28;
            case 2: return 31;
            case 3: return 30;
            case 4: return 31;
            case 5: return 30;
            case 6: return 31;
            case 7: return 31;
            case 8: return 30;
            case 9: return 31;
            case 10: return 30;
            case 11: return 31;
        }
    }

    let daysUpToFirst = 0;
    for (let year=1900;year<firstYear;year++) {
        daysUpToFirst += isLeapYear(year) ? 366 : 365;
    }

    let firstDay = (daysUpToFirst % 7) + 1;
    let firstOfMonth = firstDay;
    let numSundays = 0;
    for (let year=firstYear;year<=lastYear;year++) {
        for (let month=0;month<12;month++) {
            if (firstOfMonth % 7 === 0) numSundays++;
            firstOfMonth += daysInMonth(month,year);
        }
    }
    return numSundays;

}