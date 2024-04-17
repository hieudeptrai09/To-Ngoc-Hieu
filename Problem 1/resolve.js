var sum_to_n_a = function (n) {
  // your code here
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return i;
};

var sum_to_n_b = function (n) {
  // your code here
  return (n * (n + 1)) / 2;
};

var sum_to_n_c = function (n) {
  // your code here
  let coupleSum = 1 + n;
  let numOfCouples = n / 2;
  let sum = coupleSum * numOfCouples;
  if (n % 2 == 0) sum += n / 2 + 1;
  return sum;
};
