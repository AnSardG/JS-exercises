const img = document.getElementById("imagen");

img.addEventListener("mouseover", (ev) => {
    img.src = "../assets/img2.jpg";
})

img.addEventListener("mouseout", ()=>{
    img.src = "../assets/img1.jpg";
})