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

rating = Array.from(document.querySelectorAll(".rating"));

rating.forEach(function(mov) {
    mov.addEventListener("click", handleClick);
});

// function handleClick(e) {
//     rating.forEach((t)=>t.classList.remove("active-btn"));
//     e.target.classList.add("active-btn")
// }
function handleClick(e) {
    rating.forEach(function(val) {
        if(val == e.target) {
            val.classList.add("active-btn");
        }
        else {
            val.classList.remove("active-btn")
        }
    })
}


// function changeRatingColor() {
//     if(this.style.backgroundColor === "orange") {
//         this.style.backgroundColor = "";
//         this.style.color = "";
//     } 
//     else {
//         this.style.backgroundColor = "blue";
//         this.style.color = "white";
//     }
// }

// var ratingBtn = document.querySelectorAll(".rating").length;
// for(var i = 0; i < ratingBtn; i++) {
//     document.querySelectorAll(".rating")[i].addEventListener("click", changeRatingColor)
// }
