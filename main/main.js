module.exports = function main() {
  // Write your cade here
  var sum=arguments[0].split("").reduce(function (prev,cur) {
    return parseInt(prev)+parseInt(cur);
  });
  return sum;
};
