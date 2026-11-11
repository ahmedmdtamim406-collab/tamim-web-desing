
function changeSize(width, height) {
    var box = document.getElementById("box");
    box.style.width = width + "px";
    box.style.height = height + "px";
}


function toggleDetails() {
    var desc = document.getElementById("details");
    desc.classList.toggle("hide");
}

function highlightCard() {
    var card = document.getElementById("productCard");
    card.style.backgroundColor = "lightyellow";
    card.style.border = "2px solid red";
    card.style.color = "darkblue";
}

function checkStock(stock) {
    var result = document.getElementById("stockResult");
    if (stock > 0) {
        result.innerText = "Out of Stock";
    } else {
        result.innerText = "Available";
    }
}