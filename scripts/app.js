const country = [
  {
    countryName: "Germany",
    flag: "./imgs/flag-1.jpg",
    population: "81,770,900",
    region: "Europe",
    capital: " Berlin",
    active: "d-none",
  },
  {
    countryName: "United States of America",
    flag: "./imgs/flag-2.jpg",
    population: "323,947,000,900",
    region: "Americas",
    capital: "Washington, D.C.rlin",
    active: "d-none",
  },
  {
    countryName: "Brazil",
    flag: "./imgs/flag-3.jpg",
    population: "323,947,000,900",
    region: "Americas",
    Capital: "Brasília",
    active: "d-none",
  },
  {
    countryName: "Iceland",
    flag: "./imgs/flag-4.jpg",
    population: "323,947,000,900",
    region: "Americas",
    capital: "Washington, D.C.rlin",
    active: "d-none",
  },
  {
    countryName: "Afghanistan",
    flag: "./imgs/flag--5.jpg",
    population: "323,947,000,900",
    region: "Americas",
    capital: "Washington, D.C.rlin",
    active: "d-none",
  },
  {
    countryName: "Aland Islands",
    flag: "./imgs/flag--6.jpg",
    population: "323,947,000,900",
    region: "Americas",
    capital: "Washington, D.C.rlin",
    active: "d-none",
  },
  {
    countryName: "Albania",
    flag: "./imgs/flag--7.jpg",
    population: "323,947,000,900",
    region: "Americas",
    capital: "Washington, D.C.rlin",
    active: "d-none",
  },
  {
    countryName: "Algeria",
    flag: "./imgs/flag--8.jpg",
    population: "323,947,000,900",
    region: "Americas",
    capital: "Washington, D.C.rlin",
    active: "d-none",
  },
];
let countrys = document.querySelector(".sec_two-content");
let search = document.querySelector(".search input");

search.addEventListener("input", (e) => {
  let inputValue = search.value.toLowerCase();
  countrys.innerHTML = "";
  country.forEach((item) => {
    let city = item.countryName.toLowerCase();
    if (city.indexOf(inputValue) == -1) {
      item.active = "d-none";
    } else {
      item.active = "d-block";
      countrys.innerHTML += `
      <div class="country ${item.active}">
      <img src="${item.flag}" alt="">
      <div class="info">
        <h3>${item.countryName}</h3>
        <p>Population:<span>${item.population}</span></p>
        <p>Region: <span>${item.region}</span></p>
        <p>Capital: <span>${item.capital}</span></p>
        <p></p>
      </div>`;
    }
  });
});

country.forEach((item) => {
  countrys.innerHTML += `
      <div class="country ${item.active}">
      <img src="${item.flag}" alt="">
      <div class="info">
        <h3>${item.countryName}</h3>
        <p>Population:<span>${item.population}</span></p>
        <p>Region: <span>${item.region}</span></p>
        <p>Capital: <span>${item.capital}</span></p>
        <p></p>
      </div>`;
});
