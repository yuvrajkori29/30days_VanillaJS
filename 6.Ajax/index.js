const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cities = [];


const prom = fetch(endpoint).then(e => e.json()).then(data =>cities.push(...data));

console.log(cities);


//finding in js

function find(word,cities) {

return cities.filter(place=>{
    const regex  = new RegExp(word,'gi');
    return place.city.match(regex) || place.state.match(regex);
});

}

// find('Bos',cities);

function display()
{

   const as =  find(this.value,cities);

   const html = as.map(place => {
    return `
      <li>
        <span class="name">${place.city}, ${place.state}</span>
        <span class="population">${place.population}</span>
      </li>
    `;
  }).join('');
  
  suggestion.innerHTML = html;
    
}

const searchInput = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions');

searchInput.addEventListener('change',display);
searchInput.addEventListener('keyup',display);

