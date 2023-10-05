var circleAreaES5 = function circleArea(r) {
  var PI = 3.14;
  var area = PI * r * r;
  return area;
};
console.log("Normal function: " + circleAreaES5(1));

export const circleArea = r => {
  const PI = 3.14;
  const area = PI * r * r;
  return area;
};
console.log("Arrow Function =:> " + circleArea(100));

const circleArea2 = r => 3.14 * r * r;
console.log("Simplifyied Arrow Function ===:> " + circleArea2(200));

const empty = () => console.log("Arrow function withou params");
empty();

export const squareArea = s => s * s;