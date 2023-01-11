import "../styles/style.css";

const URL = "https://api.punkapi.com/v2/beers/random";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("recipes").textContent = data.textContent;
  } catch (error) {
    console.log(error);
  }
}

getData(URL);
