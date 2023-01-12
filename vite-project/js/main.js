import "../styles/style.css";

const URL = "https://api.punkapi.com/v2/beers/random";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    document.getElementById("recipes").innerHTML = data.name;
  } catch (error) {
    console.log(error);
  }
}

getData(URL);
