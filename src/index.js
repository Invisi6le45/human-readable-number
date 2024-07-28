module.exports = function toReadable (number) {
  let result = '';
  let l = number.toString().length;
  let digit = Array(); //* разряд
  let remain = 0; //* остаток 
  let numMidl = number;
  let numMidlWord = '';


  let digitWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million'
  };

  let k = 0;   //* для перевода разрядов с 11-19

  if (number === 0) {
    return result = digitWords[0];
  };



  for (i=l-1; i >= 0; i--){
    remain = numMidl % Math.pow (10, i);
    digit[i] = (numMidl-remain) / Math.pow (10, i);
    numMidl = remain;
  }

  for (i=l-1; i >= 0; i=i-1-k) {                    //* 10.000.000 - 99.000.000
    if (i === 7) {
      k = 0;
      if (digit[i] === 9) { result = result + (`${digitWords[90]}`)};
      if (digit[i] === 8) { result = result + (`${digitWords[80]}`)};
      if (digit[i] === 7) { result = result + (`${digitWords[70]}`)};
      if (digit[i] === 6) { result = result + (`${digitWords[60]}`)};
      if (digit[i] === 5) { result = result + (`${digitWords[50]}`)};
      if (digit[i] === 4) { result = result + (`${digitWords[40]}`)};
      if (digit[i] === 3) { result = result + (`${digitWords[30]}`)};
      if (digit[i] === 2) { result = result + (`${digitWords[20]}`)};
      if (digit[i] === 1) {
        if (10*digit[i]+digit[i-1] === 19) { result = result + (`${digitWords[19]}`)};
        if (10*digit[i]+digit[i-1] === 18) { result = result + (`${digitWords[18]}`)};
        if (10*digit[i]+digit[i-1] === 17) { result = result + (`${digitWords[17]}`)};
        if (10*digit[i]+digit[i-1] === 16) { result = result + (`${digitWords[16]}`)};
        if (10*digit[i]+digit[i-1] === 15) { result = result + (`${digitWords[15]}`)};
        if (10*digit[i]+digit[i-1] === 14) { result = result + (`${digitWords[14]}`)};
        if (10*digit[i]+digit[i-1] === 13) { result = result + (`${digitWords[13]}`)};
        if (10*digit[i]+digit[i-1] === 12) { result = result + (`${digitWords[12]}`)};
        if (10*digit[i]+digit[i-1] === 11) { result = result + (`${digitWords[11]}`)};
        if (10*digit[i]+digit[i-1] === 10) { result = result + (`${digitWords[10]}`)};
        k = 1;
        result = result + (` ${digitWords[1000000]}`)
      }
    };

    if (i === 6) {                    //* 1.000.000 - 9.000.000
      if (digit[i] === 9) { result = result + (` ${digitWords[9]}`)};
      if (digit[i] === 8) { result = result + (` ${digitWords[8]}`)};
      if (digit[i] === 7) { result = result + (` ${digitWords[7]}`)};
      if (digit[i] === 6) { result = result + (` ${digitWords[6]}`)};
      if (digit[i] === 5) { result = result + (` ${digitWords[5]}`)};
      if (digit[i] === 4) { result = result + (` ${digitWords[4]}`)};
      if (digit[i] === 3) { result = result + (` ${digitWords[3]}`)};
      if (digit[i] === 2) { result = result + (` ${digitWords[2]}`)};
      if (digit[i] === 1) { result = result + (` ${digitWords[1]}`)};
      result = result + (` ${digitWords[1000000]}`)
    };

    if (i === 5) {                    //* 100.000
      if (digit[i] === 9) { result = result + (` ${digitWords[9]}`)};
      if (digit[i] === 8) { result = result + (` ${digitWords[8]}`)};
      if (digit[i] === 7) { result = result + (` ${digitWords[7]}`)};
      if (digit[i] === 6) { result = result + (` ${digitWords[6]}`)};
      if (digit[i] === 5) { result = result + (` ${digitWords[5]}`)};
      if (digit[i] === 4) { result = result + (` ${digitWords[4]}`)};
      if (digit[i] === 3) { result = result + (` ${digitWords[3]}`)};
      if (digit[i] === 2) { result = result + (` ${digitWords[2]}`)};
      if (digit[i] === 1) { result = result + (` ${digitWords[1]}`)};
        result = result + (` ${digitWords[100]}`)
    };

    if (i === 4) {                    //* 10.000 - 99.000
      k = 0;
      if (digit[i] === 9) { result = result + (` ${digitWords[90]}`)};
      if (digit[i] === 8) { result = result + (` ${digitWords[80]}`)};
      if (digit[i] === 7) { result = result + (` ${digitWords[70]}`)};
      if (digit[i] === 6) { result = result + (` ${digitWords[60]}`)};
      if (digit[i] === 5) { result = result + (` ${digitWords[50]}`)};
      if (digit[i] === 4) { result = result + (` ${digitWords[40]}`)};
      if (digit[i] === 3) { result = result + (` ${digitWords[30]}`)};
      if (digit[i] === 2) { result = result + (` ${digitWords[20]}`)};
      if (digit[i] === 1) {
        if (10*digit[i]+digit[i-1] === 19) { result = result + (` ${digitWords[19]}`)};
        if (10*digit[i]+digit[i-1] === 18) { result = result + (` ${digitWords[18]}`)};
        if (10*digit[i]+digit[i-1] === 17) { result = result + (` ${digitWords[17]}`)};
        if (10*digit[i]+digit[i-1] === 16) { result = result + (` ${digitWords[16]}`)};
        if (10*digit[i]+digit[i-1] === 15) { result = result + (` ${digitWords[15]}`)};
        if (10*digit[i]+digit[i-1] === 14) { result = result + (` ${digitWords[14]}`)};
        if (10*digit[i]+digit[i-1] === 13) { result = result + (` ${digitWords[13]}`)};
        if (10*digit[i]+digit[i-1] === 12) { result = result + (` ${digitWords[12]}`)};
        if (10*digit[i]+digit[i-1] === 11) { result = result + (` ${digitWords[11]}`)};
        if (10*digit[i]+digit[i-1] === 10) { result = result + (` ${digitWords[10]}`)};
        k = 1;
        result = result + (` ${digitWords[1000]}`)
      }
    };

    if (i === 3) {                    //* 1.000 - 9.000
      console.log (i);
      console.log (digit[i]);
      numMidlWord = numMidlWord + digit[i];
      if (digit[i] === 9) { result = result + (` ${digitWords[9]}`)};
      if (digit[i] === 8) { result = result + (` ${digitWords[8]}`)};
      if (digit[i] === 7) { result = result + (` ${digitWords[7]}`)};
      if (digit[i] === 6) { result = result + (` ${digitWords[6]}`)};
      if (digit[i] === 5) { result = result + (` ${digitWords[5]}`)};
      if (digit[i] === 4) { result = result + (` ${digitWords[4]}`)};
      if (digit[i] === 3) { result = result + (` ${digitWords[3]}`)};
      if (digit[i] === 2) { result = result + (` ${digitWords[2]}`)};
      if (digit[i] === 1) { result = result + (` ${digitWords[1]}`)};
      result = result + (` ${digitWords[1000]}`)
    };

    if (i === 2) {                    //* 999
      if (digit[i] === 9) { result = result + (` ${digitWords[9]}`)};
      if (digit[i] === 8) { result = result + (` ${digitWords[8]}`)};
      if (digit[i] === 7) { result = result + (` ${digitWords[7]}`)};
      if (digit[i] === 6) { result = result + (` ${digitWords[6]}`)};
      if (digit[i] === 5) { result = result + (` ${digitWords[5]}`)};
      if (digit[i] === 4) { result = result + (` ${digitWords[4]}`)};
      if (digit[i] === 3) { result = result + (` ${digitWords[3]}`)};
      if (digit[i] === 2) { result = result + (` ${digitWords[2]}`)};
      if (digit[i] === 1) { result = result + (` ${digitWords[1]}`)};
        result = result + (` ${digitWords[100]}`)
    };

    if (i === 1) {                    //* 99
        k = 0;
        if (digit[i] === 9) { result = result + (` ${digitWords[90]}`)};
        if (digit[i] === 8) { result = result + (` ${digitWords[80]}`)};
        if (digit[i] === 7) { result = result + (` ${digitWords[70]}`)};
        if (digit[i] === 6) { result = result + (` ${digitWords[60]}`)};
        if (digit[i] === 5) { result = result + (` ${digitWords[50]}`)};
        if (digit[i] === 4) { result = result + (` ${digitWords[40]}`)};
        if (digit[i] === 3) { result = result + (` ${digitWords[30]}`)};
        if (digit[i] === 2) { result = result + (` ${digitWords[20]}`)};
        if (digit[i] === 1) {
          if (10*digit[i]+digit[i-1] === 19) { result = result + (` ${digitWords[19]}`)};
          if (10*digit[i]+digit[i-1] === 18) { result = result + (` ${digitWords[18]}`)};
          if (10*digit[i]+digit[i-1] === 17) { result = result + (` ${digitWords[17]}`)};
          if (10*digit[i]+digit[i-1] === 16) { result = result + (` ${digitWords[16]}`)};
          if (10*digit[i]+digit[i-1] === 15) { result = result + (` ${digitWords[15]}`)};
          if (10*digit[i]+digit[i-1] === 14) { result = result + (` ${digitWords[14]}`)};
          if (10*digit[i]+digit[i-1] === 13) { result = result + (` ${digitWords[13]}`)};
          if (10*digit[i]+digit[i-1] === 12) { result = result + (` ${digitWords[12]}`)};
          if (10*digit[i]+digit[i-1] === 11) { result = result + (` ${digitWords[11]}`)};
          if (10*digit[i]+digit[i-1] === 10) { result = result + (` ${digitWords[10]}`)};
          k = 1;
        }
      };
      
      if (i === 0) {                    //* 1 - 9
        numMidlWord = numMidlWord + digit[i];
        if (digit[i] === 9) { result = result + (` ${digitWords[9]}`)};
        if (digit[i] === 8) { result = result + (` ${digitWords[8]}`)};
        if (digit[i] === 7) { result = result + (` ${digitWords[7]}`)};
        if (digit[i] === 6) { result = result + (` ${digitWords[6]}`)};
        if (digit[i] === 5) { result = result + (` ${digitWords[5]}`)};
        if (digit[i] === 4) { result = result + (` ${digitWords[4]}`)};
        if (digit[i] === 3) { result = result + (` ${digitWords[3]}`)};
        if (digit[i] === 2) { result = result + (` ${digitWords[2]}`)};
        if (digit[i] === 1) { result = result + (` ${digitWords[1]}`)};
      };

  



  }
  console.log (result.trim());
  return result.trim();
}  

/* let z = toReadable(9879);

console.log (z); */
