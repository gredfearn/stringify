// allows use of expects function
var expect = require('chai').expect;
// imports stringify function
var stringify = require('../src/StringifiedJSON').stringify;

// Test variables
var str = 'Grant Redfearn';
var obj = { a: 1, b: 'Grant', c: 'Redfearn' };
var arr = [ 1, 2, 3, 'Grant Redfearn'];

// Start of testing suite
suite('Stringify Tests', function() {
  // Checks to see if stringify is a function
  test('Stringify should be a function', function () {
    expect(stringify).to.be.instanceOf(Function);
  });
  // Should stringify null
  test('Stringify should return a stringified null', function () {
    expect(stringify(null)).to.equal(JSON.stringify(null));
  });
  // Should handle boolean
  test('Stringify can handle a boolean', function () {
    expect(stringify(true)).to.equal(JSON.stringify(true));
  });
  //Should handle a number
  test('Stringify can handle number', function () {
    expect(stringify(1)).to.equal(JSON.stringify(1));
  });
  // Should return undefined for undefined value
  test('Stringify should return undefined for undefined value', function () {
    expect(stringify(undefined)).to.equal(undefined);
  });
  // Checks if stringify strings a string
  test('Stringify should stringify a string', function () {
    expect(stringify(str)).to.equal(JSON.stringify(str));
  });
  // Tests to see if it can stringify an array
  test('Stringify can string an array', function () {
    expect(stringify(arr)).to.equal(JSON.stringify(arr));
  });
  // Checks if stringify strings and Obj
  test('Stringify can string an object', function () {
    expect(stringify(obj)).to.equal(JSON.stringify(obj));
  });

});
