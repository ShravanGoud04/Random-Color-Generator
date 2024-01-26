const btn = document.querySelector("button");
const body = document.querySelector("body");

const colors = ["green", "blue", "red", "orange", "yellow", "violet",'Gray','Magenta','Pink','Cyan','Azure'];

// body.style.background = "pink";


const addColor=()=> {
  console.log("clicked");
  const color = parseInt(Math.random() * colors.length);
  body.style.background = colors[color];
  count++;
}
btn.addEventListener("click", addColor);