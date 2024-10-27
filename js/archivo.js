let btnHome = document.querySelector("#home");
let btnHome2 = document.querySelector("#home2");

btnHome.addEventListener("hover", () => btnHome.style.cursor = "url(../imgs/cursor2.png), auto");
btnHome.addEventListener("click", () => window.location.href = "index.html");

btnHome2.addEventListener("hover", () => btnHome2.style.cursor = "url(../imgs/cursor2.png), auto");
btnHome2.addEventListener("click", () => window.location.href = "../index.html");