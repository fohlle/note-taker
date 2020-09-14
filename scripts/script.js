let btnClose = document.getElementById("closeBtn");
let btnNote = document.querySelector("#addNote");
let nr = 1;


btnClose.addEventListener("click",() => {
    document.getElementById("overlay").style.width = "0";
})

btnNote.addEventListener("click", () => {
    let noteValue = document.querySelector("#input").value;
    addNotes(noteValue);
})

function addEve(butt){
    butt.addEventListener("click", (e) => {
        let content = e.target.previousSibling.textContent;
        document.getElementById("overlayContent").textContent = content;
        document.getElementById("overlay").style.width = "100%";
    })
}

function addNotes(noteValue){
    let div = document.createElement("div");
    let para = document.createElement("p");
    let button = document.createElement("button");

    let container = document.getElementById("noteCon");
    para.textContent = noteValue;
    div.textContent = "Note " + nr;
    div.appendChild(para);
    button.textContent = "View Details";
    
    addEve(button);
    div.appendChild(button);

    container.appendChild(div);
    document.querySelector("#input").value = "";
    nr++;
}