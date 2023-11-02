function createRandomArray(length) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * 50) + 1);
  }
  return randomArray;
}

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

function findMin(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function findMax(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function findTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function findAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const total = findTotal(arr);
  return total / arr.length;
}

function compareValues(array1, array2) {
  const min1 = findMin(array1);
  const min2 = findMin(array2);
  const max1 = findMax(array1);
  const max2 = findMax(array2);
  const total1 = findTotal(array1);
  const total2 = findTotal(array2);
  const average1 = findAverage(array1);
  const average2 = findAverage(array2);

  console.log("Min, Max, Total, dan Rata-rata pada array genap:");
  console.log("Min Genap:", min1);
  console.log("Max Genap:", max1);
  console.log("Total Genap:", total1);
  console.log("Rata-rata Genap:", average1);

  console.log("Min, Max, Total, dan Rata-rata pada array ganjil:");
  console.log("Min Ganjil:", min2);
  console.log("Max Ganjil:", max2);
  console.log("Total Ganjil:", total2);
  console.log("Rata-rata Ganjil:", average2);

  console.log("Perbandingan nilai Min, Max, Total, dan Rata-rata:");

  if (min1 > min2) {
    console.log("Min lebih besar pada: array genap");
  } else if (min1 < min2) {
    console.log("Min lebih besar pada: array ganjil");
  } else {
    console.log("Min sama pada kedua array");
  }

  if (max1 > max2) {
    console.log("Max lebih besar pada: array genap");
  } else if (max1 < max2) {
    console.log("Max lebih besar pada: array ganjil");
  } else {
    console.log("Max sama pada kedua array");
  }

  if (total1 === total2) {
    console.log("Total sama pada kedua array");
  } else {
    console.log("Total berbeda pada kedua array");
  }

  if (average1 > average2) {
    console.log("Rata-rata lebih besar pada: array genap");
  } else if (average1 < average2) {
    console.log("Rata-rata lebih besar pada: array ganjil");
  } else {
    console.log("Rata-rata sama pada kedua array");
  }
}

// Main program
const randomArray = createRandomArray(100);
const [evenArray, oddArray] = splitArrayByParity(randomArray);
compareValues(evenArray, oddArray);
console.log("Array dengan jumlah index 100:", randomArray);
console.log("Array genap dengan jumlah index 50:", evenArray);
console.log("Array ganjil dengan jumlah index 50:", oddArray);
