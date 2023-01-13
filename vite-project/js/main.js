import "../styles/style.css";
import { DOM } from "./DOM";

const URL = "https://api.punkapi.com/v2/beers/";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const infos = await response.json();
    console.log(infos);
    infos.forEach((infos) => {
      DOM.recipes.insertAdjacentHTML("afterbegin"`
      <div class="indvidual-beer">
      <h2>${infos.name}</h2>
      </div>
      `);
    });
    DOM.recipes.innerHTML = data.name;
  } catch (error) {
    console.log(error);
  }
}

getData(URL);
