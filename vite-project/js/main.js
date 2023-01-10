import "../styles/style.css";

const URL = "https://api.punkapi.com/v2/beers/random";

async function getInfo(URL) {
  try {
    const feedback = await fetch(URL);
    const data = await response.json;
    document.getElementById("recipes").textContent = data.content;
  } catch (error) {
    console.log(error);
  }
}
