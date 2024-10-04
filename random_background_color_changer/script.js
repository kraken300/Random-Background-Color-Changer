const colorName = document.querySelector(".colorName");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

function handleBtn1() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    colorName.textContent = `rgb(${r}, ${g}, ${b})`;
}

function handleBtn2() {
    const hexString = "0123456789ABCDEF";
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hexString[Math.floor(Math.random() * hexString.length)];
    }
    document.body.style.backgroundColor = hexColor;
    colorName.textContent = hexColor;
}

function handleBtn3() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 101);
    const l = Math.floor(Math.random() * 101);
    document.body.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
    colorName.textContent = `hsl(${h}, ${s}%, ${l}%)`;
}

btn1.onclick = handleBtn1;
btn2.onclick = handleBtn2;
btn3.onclick = handleBtn3;