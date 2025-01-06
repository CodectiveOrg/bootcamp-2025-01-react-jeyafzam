function reverseArray<T>(arr: T[]): T[] {
  const reversed: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
}

const inputArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(inputArray);

console.log("Original Array:", inputArray);
console.log("Reversed Array:", reversedArray);
