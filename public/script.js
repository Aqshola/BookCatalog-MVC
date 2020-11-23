let inputNum = document.getElementById("bookPrice");
let displayAlert = document.querySelector("#alert");
let inputFile = document.querySelector("#inputFile");

inputFile.addEventListener("change", (e) => {
  const preview = document.querySelector("#preview");
  const prebox = document.querySelector(".pre-wrap");
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
