const btn = document.getElementById("submit");
btn.addEventListener("click", (ev) => {
    ev.preventDefault();    
    let number = document.getElementById("number").value;
    let res = document.getElementById("res");
    const regex = new RegExp("\d{1,3}");
    let good = false;

    if (regex.test(regex)) {
        number = Number.parseInt(number);        
        if (number >= 1 && number <= 100) {
            good = true;
        }
    }

    if (good) {
        res.textContent = "Correcto";
    } else {
        res.textContent = "Erroneo";
    }

});