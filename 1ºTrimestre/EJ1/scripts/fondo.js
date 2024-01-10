function getRgbNumber() {
    return Math.floor(Math.random() * 255);
}

function getBgColor() {
    return "rgb(" + getRgbNumber() + "," + getRgbNumber() + "," + getRgbNumber() + ")";
}

document.body.style.backgroundColor = getBgColor();
