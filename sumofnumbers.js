const nums = [1, 2, 3, 4, 5];
const size = nums.length;
function sumFor(num) {
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    total += num[i];
  }
  return total;
}

function sumWhile(num) {
  let total = 0;
  let condition = 0;
  while (condition < num.length) {
    total += num[condition];
    condition++;
  }
  return total;
}

function sumRecursion(num, total) {
  if (total <= 0) {
    return 0;
  }
  return (sumRecursion(num, total - 1) + num[total - 1]);
}

function sumTheSimpleWay(data) {
  console.log(_.reduce(data, function (memo, num) { return memo + num; }, 0));
}
console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums, size));
sumTheSimpleWay(nums);
