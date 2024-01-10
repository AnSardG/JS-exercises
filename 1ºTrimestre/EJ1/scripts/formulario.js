const btn = document.getElementById("submit");
btn.addEventListener("click", (ev) => {
    ev.preventDefault();
    let number = document.getElementById("number").value;
    let res = document.getElementById("res");

    if (checkNumber(number)) {
        res.textContent = "Correcto.";
    } else {
        res.textContent = "Erróneo.";
    }
});

function checkNumber(number) {
    const regex = new RegExp("^[0-9]{1,3}$");
    let good = false;

    if (regex.test(number)) {
        good = true;
        number = Number.parseInt(number);
        if (number < 1 || number > 100) {
            good = false;
        }
    }
    return good;
}