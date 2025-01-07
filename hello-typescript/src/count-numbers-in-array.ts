function countNumbersInArray(arr: unknown[]): number {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      count++;
    }
  }

  return count;
}

console.log(countNumbersInArray([1, "hello", 3, true, 5, 7, "world"]));
