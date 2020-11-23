let inputNum = document.getElementById("bookPrice");
let displayAlert = document.querySelector("#alert");
let inputFile = document.querySelector("#inputFile");
const prebox = document.querySelector(".pre-wrap");
const preview = document.querySelector("#preview");

if (preview.src) {
  prebox.style.display = "flex";
}

inputFile.addEventListener("change", (e) => {
  let uri = URL.createObjectURL(e.target.files[0]);

  preview.setAttribute("src", uri);
  prebox.style.display = "flex";
});

setTimeout(() => {
  displayAlert.style.display = "none";
}, 2500);

inputNum.addEventListener("input", (e) => {
  inputNum.value = inputNum.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*)\./g, "$1");
});
