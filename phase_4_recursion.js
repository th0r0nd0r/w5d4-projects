function range(start, end) {
  if (start > end) {
    return [];
  }

  // return range(start+1,end).concat(start);
  let arr = range(start+1, end);
  arr.unshift(start);
  return arr;
}

range(3,6);


function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  return sumRec(arr.slice(1)) + arr[0];
}

sumRec([3,4,5]);


function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp - 1);
}

exponent(3,3);

function exponent2(b, n) {
  if (n === 0) {
    return 1;
  }
  if (n % 2 === 0) {
    return exponent2(b, n / 2) * exponent2(b, n / 2);
  } else {
    return b * (exponent2(b, (n - 1) / 2) * exponent2(b, (n - 1) / 2));
  }
}

function fibonacci(n) {
  if ( n < 1) {
    return console.log('naw dawg');
  }
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return [1,1];
  }

  let prev = fibonacci(n-1);

  let last = prev[prev.length-1];
  let second = prev[prev.length - 2];

  return prev.concat(last + second);
}

function bsearch(arr, target) {
  let mid = Math.floor(arr.length / 2);
  let midValue = arr[mid];

  if (midValue === target) {
    return mid;
  }

  if (arr[mid] > target) {
    const left = arr.slice(0,mid);
    return bsearch(left, target);
  }

  if (arr[mid] < target) {
    const right = arr.slice(mid+1);
    const subProblem = bsearch(right, target);

    return subProblem === -1 ? -1 : subProblem + (mid+1);
  }
}

function merge(left, right) {
  let result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push((left.shift()));
    } else {
      result.push((right.shift()));
    }
  }

  return result.concat(left, right);
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));

  // console.log(mid);
  // console.log(left);
  // console.log(right);

  return merge(left, right);
  }
}

// mergeSort([4,8,6,3,5]);

// function subsets(arr) {
//   // debugger;
//
//   if (arr.length === 0) {
//     return [[]];
//   }
//
//   const prev = subsets(arr.slice(1));
//
//   let addto = prev;
//   let dontadd = prev;
//
//   addto.forEach(function(el) {
//     el.push(arr[0]);
//   });
//
//   let x = addto.concat(dontadd);
//
//   console.log('dontadd is ' + dontadd);
//   console.log('return is ' + x);
//
//   return (addto.concat(dontadd));
//
// }

function subsets(array) {
  if (array.length === 0) {
    return [[]];
  }

  const first = array[0];

  const withoutFirst = subsets(array.slice(1));

    const withFirst = withoutFirst.map(function(el) {
      console.log("element is " + el);
      return [first].concat(el);
    });

  // const withFirst = withoutFirst.map(el => [first].concat(el));

  return withoutFirst.concat(withFirst);
}
