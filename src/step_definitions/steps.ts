import {Given, When, Then} from 'cucumber';
var assert = require('assert');

var numOne : number;
var numTwo : number;
var numSum : number;
Given('the numbers are {int} and {int}', (int, int2) => {
    numOne = int;
    numTwo = int2;
});

When('they are added together', () => {
    numSum = numOne + numTwo;
});

Then('the result is {int}', (int) => {
    assert.equa(numSum, int);
});