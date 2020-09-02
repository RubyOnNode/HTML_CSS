const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbols,
};

const resultElement = document.getElementById("result");
const lengthElement = document.getElementById("length");
const uppercaseElement = document.getElementById("uppercase");
const lowercaseElement = document.getElementById("lowercase");
const numberElement = document.getElementById("number");
const symbolElement = document.getElementById("symbol");
const generateBtn = document.getElementById("generate");
const clipboardBtn = document.getElementById("clipboard");

clipboardBtn.onclick = (e) => {
  e.preventDefault();
  const messageElement = document.getElementById("message");
  const textarea = document.createElement("textarea");
  const password = resultElement.value;
  if (password == "" || password == undefined) {
    messageElement.innerText = "No Password! Generate some password's first";
    messageElement.style.color = "red";
  } else {
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    messageElement.innerText = "Password! Copied to clipboard";
    messageElement.style.color = "green";
  }
};

//Generator functions

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const length = Number(lengthElement.value);
  const hasLower = lowercaseElement.checked;
  const hasUpper = uppercaseElement.checked;
  const hasNumber = numberElement.checked;
  const hasSymbol = symbolElement.checked;
  resultElement.value = generatePassword(
    length,
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol
  );
});

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbols() {
  const symbols = "!@#$%&*?=():{}[]<>?";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(length, upper, lower, number, symbol) {
  //filter cases
  let genPassword = "";
  const typesCount = upper + lower + number + symbol;
  const TypesArray = [{ upper }, { lower }, { number }, { symbol }];
  const callFunc = TypesArray.filter(
    (item) => item.upper || item.lower || item.number || item.symbol
  );
  while (genPassword.length < length) {
    const selectFunction = Math.floor(Math.random() * typesCount);
    genPassword += randomFunc[Object.keys(callFunc[selectFunction])[0]]();
  }
  return genPassword;
}
