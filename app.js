let btn = document.querySelector("button");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    if (inp.value.trim() === "") {
        return;
    }

    console.log("Task Added");
    console.log(inp.value);
    let div = document.createElement("div");
    document.querySelector("body").appendChild(div);
    let radio = document.createElement("input");
    radio.type = "radio";
    let lable = document.createElement("lable");
    div.style.backgroundColor = getRandomColor();
    div.style.color = "white";
    lable.innerText = inp.value;
    div.appendChild(radio);
    div.appendChild(lable);
    inp.value = "";
    radio.addEventListener("change", function () {
        // document.querySelector("body").removeChild(div);
        div.remove();
    });
});
function getRandomColor() {
    let random = Math.floor(Math.random() * 255);
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let rgb = (`rgb(${red},${green},${blue})`);
    return rgb;
}