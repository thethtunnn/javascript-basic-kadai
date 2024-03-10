
const element = document.getElementById("btn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("text").innerHTML = "ボタンをクリックしました。";
}