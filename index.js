// Membuat array dengan 100 nilai acak antara 1 dan 50
function createRandomArray(length) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * 50) + 1);
  }
  return randomArray;
}

// Memisahkan array menjadi array genap dan ganjil
function splitArrayByParity(arr) {
  const evenArray = [];
  const oddArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenArray.push(arr[i]);
    } else {
      oddArray.push(arr[i]);
    }
  }
  return [evenArray, oddArray];
}

// Menghitung Min
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Menghitung Max
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Menghitung Total
function findTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Menghitung Rata-rata
function findAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const total = findTotal(arr);
  return total / arr.length;
}

// Main program
const randomArray = createRandomArray(100);
const [evenArray, oddArray] = splitArrayByParity(randomArray);

const minEven = findMin(evenArray);
const maxEven = findMax(evenArray);
const totalEven = findTotal(evenArray);
const averageEven = findAverage(evenArray);

const minOdd = findMin(oddArray);
const maxOdd = findMax(oddArray);
const totalOdd = findTotal(oddArray);
const averageOdd = findAverage(oddArray);

console.log("Array dengan jumlah index 100:", randomArray);
console.log("Array genap dengan jumlah index 50:", evenArray);
console.log("Array ganjil dengan jumlah index 50:", oddArray);

console.log("Min, Max, Total, dan Rata-rata pada array genap:");
console.log("Min Genap:", minEven);
console.log("Max Genap:", maxEven);
console.log("Total Genap:", totalEven);
console.log("Rata-rata Genap:", averageEven);

console.log("Min, Max, Total, dan Rata-rata pada array ganjil:");
console.log("Min Ganjil:", minOdd);
console.log("Max Ganjil:", maxOdd);
console.log("Total Ganjil:", totalOdd);
console.log("Rata-rata Ganjil:", averageOdd);

console.log("Perbandingan nilai Min, Max, Total, dan Rata-rata:");

// Percabangan
if (minEven > minOdd) {
  console.log("Min lebih besar pada: array genap");
} else if (minEven < minOdd) {
  console.log("Min lebih besar pada: array ganjil");
} else {
  console.log("Min sama pada kedua array");
}

if (maxEven > maxOdd) {
  console.log("Max lebih besar pada: array genap");
} else if (maxEven < maxOdd) {
  console.log("Max lebih besar pada: array ganjil");
} else {
  console.log("Max sama pada kedua array");
}

if (totalEven === totalOdd) {
  console.log("Total sama pada kedua array");
} else {
  console.log("Total berbeda pada kedua array");
}

if (averageEven > averageOdd) {
  console.log("Rata-rata lebih besar pada: array genap");
} else if (averageEven < averageOdd) {
  console.log("Rata-rata lebih besar pada: array ganjil");
} else {
  console.log("Rata-rata sama pada kedua array");
}

// Variabel
// Dalam kode tersebut, kita menggunakan variabel seperti randomArray, evenArray, oddArray, minEven, maxEven, totalEven, averageEven, minOdd, maxOdd, totalOdd, dan averageOdd
// Tipe Data:
// Dalam kode tersebut, kita menggunakan tipe data number, numerik, string.
// Operator:
// operator matematika seperti +, -, *, /, % Operator perbandingan seperti >, <, ===
// Percabangan:
// if, else if, dan else.
// Perulangan: for dalam fungsi createRandomArray(length).
// Array: randomArray, evenArray, dan oddArray.
// Fungsi:createRandomArray(length), splitArrayByParity(arr), findMin(arr), findMax(arr), findTotal(arr), dan findAverage(arr).
