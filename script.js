let input = document.getElementById("number");
let convert = document.getElementById("convert-btn");
let answerElement = document.getElementById("answer");

function convertToRoman(inputValue) {
  let number = parseInt(inputValue);
  let romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  if (inputValue.length === 0) {
    alert("Please enter a valid number");
    return false;
  }
  if (number <= 0) {
    alert("Please enter a number greater than or equal to 1");
    return false;
  }
  if (number >= 4000) {
    alert("Please enter a number less than or equal to 3999");
    return false;
  }

  let answer = "";
  let romanNumeralKeys = Object.keys(romanNumerals);

  romanNumeralKeys.forEach((key) => {
    while (romanNumerals[key] <= number) {
      number -= romanNumerals[key];
      answer += key;
    }
  });

  // Uncomment the next line if you want to return the answer
  /*return answer;*/
  answerElement.textContent = `${answer}`;
}

convert.addEventListener("click", function() {
  convertToRoman(input.value);
});