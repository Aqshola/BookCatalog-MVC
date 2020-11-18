let inputNum = document.getElementById("bookPrice");
let displayAlert = document.querySelector("#alert");

setTimeout(() => {
  displayAlert.style.display = "none";
}, 2500);

inputNum.addEventListener("input", (e) => {
  inputNum.value = inputNum.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*)\./g, "$1");
});
