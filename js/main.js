const functRand = function (min, max){
  if (max < min) { return 0; }
  return Math.floor(Math.random * (max - min + 1) + min);
};

functRand(10, 35);

const funCheck = function (str, permLen){
  if (str.length > permLen) { return false; }
  return true;
};

funCheck('Five', 5);
