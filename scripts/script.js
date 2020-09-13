let btn = document.getElementById("btn");
let btnClose = document.getElementById("closeBtn");

btn.addEventListener("click",() => {
    document.getElementById("overlay").style.width = "100%";
})

btnClose.addEventListener("click",() => {
    document.getElementById("overlay").style.width = "0";
})