Filename: sophisticated_code.js

/*
 * This code implements a sophisticated algorithm for finding prime numbers within a given range.
 * The algorithm utilizes various mathematical concepts and optimizations to improve efficiency.
 * The prime numbers are stored in an array and printed to the console.
 */

function isPrime(number) {
  // Handle cases for numbers less than 2 and even numbers
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }

  // Check for divisibility by odd numbers up to the square root of the number
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function findPrimesInRange(start, end) {
  const primes = [];

  // Handle special case for 2
  if (start <= 2 && end >= 2) {
    primes.push(2);
  }

  // Generate primes within the specified range
  for (let number = Math.max(3, start); number <= end; number += 2) {
    if (isPrime(number)) {
      primes.push(number);
    }
  }

  return primes;
}

function displayPrimes(primes) {
  console.log("Prime Numbers:");
  primes.forEach((prime) => console.log(prime));
}

const startRange = 1;
const endRange = 1000;

const primesInRange = findPrimesInRange(startRange, endRange);
displayPrimes(primesInRange);
