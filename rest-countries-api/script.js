const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
loadCountries()
const displayCountry = countries => {
    const allCountries = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country.name)
        const div = document.createElement('div')
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p><b>Capital:</b> ${country.capital}</p>
        <button onclick="loadCountryDetails('${country.name}')">Details</button>
        `
        // const h3 = document.createElement('h3')
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        allCountries.appendChild(div)
    })
}

const loadCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = details => {
    console.log(details)
    const countryDetail = document.getElementById('country-details')
    countryDetail.classList.add('style')
    countryDetail.innerHTML = `
    <h3>${details.name}</h3>
    <p><b>Native-name :</b> ${details.nativeName}</p>
    <p><b>Population :</b> ${details.population}</p>
    <p><b>Region :</b> ${details.region}</p>
    <img width="200px" src="${details.flag}">
    `
}