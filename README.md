# Project Euler 019 - Counting Sundays

You are given the following information, but you may prefer to do some research for yourself.

- 1 Jan 1900 was a Monday
- Thirty Days has September,
  April, June and November.
  All the rest have thirty-one,
  Saving February alone,
  Which has twenty-eight, rain or shine.
  And on leap years, twenty-nine.

A leap year occurs on any year divisible by 4, but not on a century, unless it is divisible by 400.

The aim is to find the number of Sundays that fall on the first of each month.  For example, during the 20th century (1 January 1901 to 31 December 2000).

Information at [Project Euler 019](https://projecteuler.net/problem=19)

## UX

**Getting Started**

Enter the year (required) in each of the two input fields (e.g. 1943, 1946).

Make sure that you enter a number that is an integer (e.g. 1980).

Make sure that the second year is later than the first year.

Make sure that the first year is between 1901 and 2099.

Make sure that the second year is between 1902 and 2100, but in all cases later than the first year.

Assuming your inputs are valid, you will get information on the first and second years that you have entered.  You will also get information on the number of Sundays that fell on the first of the month during the given years (e.g. 10 Sundays fell on the first of the month during 1995 and 2000).

**User Stories**

As a user, I expect to get the invalid input message, if I do any of:

- Entering text other than a number in either of the input fields or both
- Not enter anything in either of the input fields or both
- Entering a number less than 1901 or greater than 2099 in the first input field
- Entering a number less than 1902 or greater than 2100 in the second input field
- Entering a number, but it is not an integer in either of the input fields or both
- Entering the second number less than or equal to the first number

As a user, I expect the function `countingSundays(1943,1946)` to return a number.

As a user, I expect the function `countingSundays(1943,1946)` to return 6.

As a user, I expect the function `countingSundays(1995,2000)` to return 10.

As a user, I expect the function `countingSundays(1901,2000)` to return 171.

**Information Architecture**

The function `countingSundays(firstYear,lastYear)` returns a number, where `firstYear` and `lastYear` are both numbers.  The variable `lastYear` is greater than the variable `firstYear`.

## Features

Allows the user to enter years.  Finds the number of Sundays that fell in the first of the month in the given years.  Performs checks on inputs.  If the inputs are not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.0-Beta1 and Google Fonts.
  