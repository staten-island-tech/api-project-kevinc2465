import "../styles/style.css";
import { DOM } from "./DOM";

const URL = "https://api.punkapi.com/v2/beers/";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const infos = await response.json();
    console.log(infos);
    // infos.forEach((info) => {
    //   DOM.recipes.insertAdjacentHTML("beforeend"`
    //   <div class="indvidual-beer">
    //   <h2>${info.name}</h2>
    //   </div>
    //   `);
    // });
    // DOM.recipes.innerHTML = infos.name;
    console.log(infos[2].name);
  } catch (error) {
    console.log(error);
  }
}

getData(URL);
