
function changeBgColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
}

document.getElementById('colorButton').addEventListener('click', changeBgColor);
