/*
Complete the function that takes 3 numbers x, y and k (where x ≤ y), 
and returns the number of integers within the range [x..y] (both ends included) 
that are divisible by k.

More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }

Example:
  Given x = 6, y = 11, k = 2 the function should return 3, 
  because there are three numbers divisible by 2 between 6 and 11: 6, 8, 10.
*/


// Solution

function divisibleCount(x, y, k) {
  while (x%k!=0) x++;
  while (y%k!=0) y--;
  return 1+Math.round((y-x)/k)
}

// or

function divisibleCount(x, y, k) {
  return Math.floor(y/k) - Math.floor((x-1)/k)
}