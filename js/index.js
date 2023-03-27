let repspan = document.querySelector("#repspan");
let pargh = document.getElementById("pargh");

let butt = document.getElementById("butt");

let urll = "https://api.quotable.io/random";

async function getqoute() {
  try {
    pargh.style.cssText = "display:inline";
    repspan.innerHTML = "update Quote....";
    pargh.innerHTML = `lood..`;
    butt.innerHTML = "Loading...";

    let conne = await fetch(urll);
    console.log(conne);
    let arr = await conne.json();
    console.log(arr);

    repspan.innerHTML = `${arr.content}`;
    pargh.innerHTML = `${arr.author}`;
    butt.innerHTML = "Click to Generate";
  } catch (error) {
    repspan.innerHTML = `errrrroooorrrr`;
    pargh.style.cssText = "display:none";
  }
}
butt.addEventListener("click", getqoute);
