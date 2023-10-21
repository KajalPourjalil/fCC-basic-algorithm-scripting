function convertCtoF(celsius)
{
    let fahrenheit = celsius * 9 / 5 + 32;

    // return fahrenheit;
    console.log(fahrenheit);
}

convertCtoF(30);




function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    // return reversedStr;
    console.log(reversedStr);
}

reverseString('nice');

function reverseString2(str) {
    return str
    .split("")
    .reverse()
    .join("");
}

reverseString2('kajal');

function factorialize(num) {
    if (num <= 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

factorialize(5);

function findLongestWordLength(str) {
    let longestLength = 0;
    let currentLength = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            if (currentLength > longestLength) {
                longestLength = currentLength;
            }
            currentLength = 0;
        } else {
            currentLength++;
        }
    }
    if (currentLength > longestLength) {
        longestLength = currentLength;
    }

    return longestLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

