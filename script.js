document.getElementById("btn").addEventListener("click", checkPlindrom);
function isPlindrome(str) {
  const cleanstr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverse = cleanstr.split("").reverse().join("");
  return cleanstr === reverse;
}
function checkPlindrom() {
  let result = document.getElementById("result");
  console.log(result);
  let inputText = document.getElementById("input");

  if (isPlindrome(inputText.value)) {
    result.textContent = `"${inputText.value}" is a plindrome`;
  } else {
    result.textContent = `"${inputText.value}" is not a plindrom`;
  }
}
