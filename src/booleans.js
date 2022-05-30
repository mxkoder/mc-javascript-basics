function negate(a) {
  return !(a);
};

function both(a, b) {
  return a && b;
};

function either(a, b) {
  return a || b;
};

function none(a, b) {
  return !(a || b);
};

function one(a, b) {
if (a == true && b == false) {
    return true;
  } else if (b == true && a == false) {
    return true;
  } else {
    return false;
  }
};

function truthiness(a) {
  return Boolean(a);

};

function isEqual(a, b) {
  return (a === b);
};

function isGreaterThan(a, b) {
  // your code here
};

function isLessThanOrEqualTo(a, b) {
  // your code here
};

function isOdd(a) {
  // your code here
};

function isEven(a) {
  // your code here
};

function isSquare(a) {
  // your code here
};

function startsWith(char, string) {
  // your code here
};

function containsVowels(string) {
  // your code here
};

function isLowerCase(string) {
  // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
