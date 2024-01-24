document.querySelector("button").addEventListener('click', function() {
    if(this.style.backgroundColor === "white") {
        this.style.backgroundColor = "";
        this.style.color = "";
    } 
    else {
        this.style.backgroundColor = "white";
        this.style.color = "chocolate";
    }
})