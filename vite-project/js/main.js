import "../styles/style.css";
import { DOM } from "./DOM";

const URL = "https://api.punkapi.com/v2/beers/";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const infos = await response.json();
    console.log(infos);
    infos.forEach((info) => {
      DOM.recipes.insertAdjacentHTML(
        "beforeend",
        `
          <div class="result">
          <h2 class="beverage-name">${info.name}</h2>
          <img class="image" src= "${info.image_url}"/>
          <p class="header">Year produced: ${info.first_brewed}</p>
          <p class="header">Tagline: ${info.tagline}</p>
          <p class="paragraph">Descriptions: ${info.description}</p>
          </div>
        `
      );
    });
  } catch (error) {
    console.log(error);
  }
}

getData(URL);

function clearField() {
  document.querySelectorAll(".result").forEach((result) => {
    result.remove();
  });
};

function sortAttenuation(){
  const results = infos.filter((info) => info.attenuation_level === 80);
  results.forEach((info) => {
    DOM.recipes.insertAdjacentHTML(
      "beforeend",
      `
        <div class="result">
        <h2 class="beverage-name">${info.name}</h2>
        <img class="image" src= "${info.image_url}"/>
        <p class="header">Year produced: ${info.first_brewed}</p>
        <p class="header">Tagline: ${info.tagline}</p>
        <p class="paragraph">Descriptions: ${info.description}</p>
        </div>
      `
    );
  })
};

DOM.attenuation.addEventListener("click", function () {
  clearField();
  sortAttenuation();
});

DOM.reset.addEventListener("click", function () {
  clearField();
  getData(URL);
});