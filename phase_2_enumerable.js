Array.prototype.myEach = function(func/*this is the callback*/) {
  for (let i = 0;i < this.length; i++) {
    func(this[i]);
  }
};

Array.prototype.myMap = function(func) {
  let mappedArray = [];

  this.myEach(function(element) {
    mappedArray.push(func(element));
  });
  return mappedArray;
};

Array.prototype.myReduce = function(func, initial) {

  const arr = this;

  if (!initial) {
    initial = arr[0];
    arr.slice(1);
  }

  let acc = initial;

  arr.myEach(function(element) {
    acc = func(acc, element);
  });
  return acc;
};


[1,2,3].myReduce(function(acc, el) {
  return acc + el;
}, 25);
