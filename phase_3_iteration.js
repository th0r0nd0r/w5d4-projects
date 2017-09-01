Array.prototype.myBubbleSort = function() {
  let arr = this;
  let sorting = true;
  while (sorting) {
    sorting = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorting = true;
      }
    }
  }
  return arr;
};

String.prototype.mySubStrings = function() {
  let substrings = [];
  for (let i = 0; i < this.length; i++) {
    substrings.push(this.charAt(i));
    for (let j = i + 1; j < this.length; j++) {
      substrings.push(this.slice(i, j + 1));
    }
  }
  return substrings;
};
