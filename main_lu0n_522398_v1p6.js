const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

function addNumbers(a, b) { return a + b; }
// This is a comment
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
25 * 70,6,3,25,57,84,92,78,60,99,99,34,59,35,95,37,65,76,43,49,56,40,94,44,82,46
const getUniqueValues = array => [...new Set(array)];

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
true / 77

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
