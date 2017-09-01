Array.prototype.uniq = function() {
  let holder = [];

  this.forEach(function(el) {
    if (holder.indexOf(el) === -1) {
      holder.push(el);
    }
  });

  return holder;
};

Array.prototype.two_sum = function() {
  let holder = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        holder.push([i,j]);
      }
    }
  }
  return holder;
};

Array.prototype.transpose = function(){
  let transposed = [];

  for (let i = 0; i < this.length; i++) {
    let dummy = [];
    for (let j = 0; j < this[0].length; j++) {
      dummy.push(this[j][i]);
    }
    transposed.push(dummy);
  }
  return transposed;
};
