import "../styles/style.css";
import { DOM } from "./DOM";

const URL = "https://api.punkapi.com/v2/beers/";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const infos = await response.json();
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
}

async function sortAttenuation() {
  try {
    const response = await fetch(URL);
    const infos = await response.json();
    const results = infos.filter((info) => info.attenuation_level > 85);
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
    });
  } catch (error) {
    console.log(error);
  }
}

DOM.attenuation.addEventListener("click", function () {
  clearField();
  sortAttenuation();
});

async function sortPh() {
  try {
    const response = await fetch(URL);
    const infos = await response.json();
    const results = infos.filter((info) => info.ph > 4.2);
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
    });
  } catch (error) {
    console.log(error);
  }
}

DOM.ph.addEventListener("click", function () {
  clearField();
  sortPh();
});

async function sortSRM() {
  try {
    const response = await fetch(URL);
    const infos = await response.json();
    const results = infos.filter((info) => info.srm > 4);
    results.forEach((info) => {
      DOM.recipes.insertAdjacentHTML(
        "beforeend",
        `
          <div class="result">
          <h2 class="beverage-name">${info.name}</h2>
          <img class="image" src= "${info.image_url}" alt= "beer with you"/>
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

DOM.srm.addEventListener("click", function () {
  clearField();
  sortSRM();
});

async function sortIBU() {
  try {
    const response = await fetch(URL);
    const infos = await response.json();
    const results = infos.filter((info) => info.ibu > 45);
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
    });
  } catch (error) {
    console.log(error);
  }
}

DOM.ibu.addEventListener("click", function () {
  clearField();
  sortIBU();
});

DOM.reset.addEventListener("click", function myFunction() {
  clearField();
  getData(URL);
});
