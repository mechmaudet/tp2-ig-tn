let btnHome = document.querySelector("#home");

btnHome.addEventListener("hover", () => btnHome.style.cursor = "url(../imgs/cursor2.png), auto");
btnHome.addEventListener("click", () => window.location.href = "index.html");