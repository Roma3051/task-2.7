// "use strict";

// function initCountriesPage() {
//     let countriesData = [];
//     let currentRegion = null;

//     const loadCountryAPI = () => {
//         fetch('https://restcountries.com/v3.1/all')
//             .then(res => res.json())
//             .then(data => {
//                 countriesData = data;
//                 displayRandomCountries();
//                 setupSearch();
//                 setupRegionClick();
//                 setupRegionsNavigation(); 
//             })
//             .catch(error => console.error('Error fetching countries:', error));
//     }

//     const getRandomCountries = (countries, count) => {
//         const shuffledCountries = countries.slice().sort(() => 0.5 - Math.random());
        
//         return shuffledCountries.slice(0, count);
//     }

//     const displayCountries = cards => {
//         const container = document.getElementById('cards');
        
//         container.innerHTML = cards.map(country => getCountryHTML(country)).join('');
//     }

//     const getCountryHTML = (country) => {
//         return `
//             <ul class="card">
//                 <img src="${country.flags.png}" alt="Country">
//                 <li class="info">
//                     <h2>Country: ${country.name.common}</h2>
//                     <h3>Population: ${country.population}</h3>
//                     <h3>Region: ${country.region}</h3>
//                     <h3>Capital: ${country.capital}</h3>
//                 </li>
//             </ul>
//         `;
//     }

//     const displayRandomCountries = () => {
//         let filteredCountries = countriesData;
//         const searchTerm = document.querySelector('.search input').value.trim().toLowerCase();
        
//         filteredCountries = filterCountriesBySearchTerm(filteredCountries, searchTerm);

//         if (currentRegion) {
//             filteredCountries = filterCountriesByRegion(filteredCountries, currentRegion);
//         }
    
//         let randomCountries = getRandomCountries(filteredCountries, 8);
//         displayCountries(randomCountries);
//     }
    
//     const setupSearch = () => {
//         const searchInput = document.querySelector('.search input');
    
//         const performSearch = () => {
//             displayRandomCountries();
//         };
    
//         searchInput.addEventListener('input', performSearch);
//     };

//     const setupRegionClick = () => {
//         const regionsContainer = document.querySelector('.side-list');
        
//         regionsContainer.addEventListener('click', (event) => {
//             if (event.target.tagName === 'A') {
//                 currentRegion = event.target.textContent;
//                 displayRandomCountries();
//                 const labelForRegion = document.querySelector('label[for="burger"]');
//                 labelForRegion.textContent = `Region: ${currentRegion}`;

//                 localStorage.setItem('selectedRegion', currentRegion);
//             }
//         });
//     }

//     const setupRegionsNavigation = () => {
//         const regionsContainer = document.querySelector('.side-list');
//         const uniqueRegions = [...new Set(countriesData.map(country => country.region))];
        
//         uniqueRegions.forEach(region => {
//             regionsContainer.innerHTML += `<li><a href="#${region}">${region}</a></li>`;
//         });
//     }

//     const checkbox = document.getElementById('background-toggle-button');
//     const body = document.body;
    
//     checkbox.addEventListener('change', (e) => {
//       e.target.checked
//         ? body.classList.replace('white-background', 'black-background')
//         : body.classList.replace('black-background', 'white-background')
      
//       localStorage.setItem('theme', e.target.checked ? 'dark' : 'light');
//     });       
    
//     loadCountryAPI();

//     const filterCountriesBySearchTerm = (countries, searchTerm) => {
//         if (!searchTerm) {
//             return countries;
//         }
    
//         return countries.filter(country =>
//             country.name.common.toLowerCase().includes(searchTerm)
//         );
//     }
    
//     const filterCountriesByRegion = (countries, region) => {
//         return countries.filter(country => country.region === region);
//     }

//     const burger = document.getElementById('burger');
//     const nav = document.querySelector('.nav');

//     nav.addEventListener('click', function(event) {
//         if (event.target.tagName === 'A') {
//             burger.checked = false;
//         }
//     });  

//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//         checkbox.checked = savedTheme === 'dark';
//         body.classList.toggle('black-background', checkbox.checked);
//         body.classList.toggle('white-background', !checkbox.checked);
//     }
// }

// initCountriesPage();


// "use strict";

// function initCountriesPage() {
//     let countriesData = [];
//     let currentRegion = null;

//     const loadCountryAPI = () => {
//         fetch('https://restcountries.com/v3.1/all')
//             .then(res => res.json())
//             .then(data => {
//                 countriesData = data;
//                 displayRandomCountries();
//                 setupSearch();
//                 setupRegionClick();
//                 setupRegionsNavigation(); 
//             })
//             .catch(error => console.error('Error fetching countries:', error));
//     }

//     const getRandomCountries = (countries, count) => {
//         const shuffledCountries = countries.slice().sort(() => 0.5 - Math.random());
        
//         return shuffledCountries.slice(0, count);
//     }

//     const displayCountries = cards => {
//         const container = document.getElementById('cards');
        
//         container.innerHTML = cards.map(country => getCountryHTML(country)).join('');
//     }

//     const getCountryHTML = (country) => {
//         return `
//             <li class="card">
//                 <img src="${country.flags.png}" alt="Country">
//                 <div class="info">
//                     <h2>Country: ${country.name.common}</h2>
//                     <h3>Population: ${country.population}</h3>
//                     <h3>Region: ${country.region}</h3>
//                     <h3>Capital: ${country.capital}</h3>
//                 </div>
//             </li>
//         `;
//     }

//     const displayRandomCountries = () => {
//         let filteredCountries = countriesData;
//         const searchTerm = document.querySelector('.search input').value.trim().toLowerCase();
        
//         filteredCountries = filterCountriesBySearchTerm(filteredCountries, searchTerm);

//         if (currentRegion) {
//             filteredCountries = filterCountriesByRegion(filteredCountries, currentRegion);
//         }
    
//         const randomCountries = getRandomCountries(filteredCountries, 8);
//         displayCountries(randomCountries);
//     }
    
//     const setupSearch = () => {
//         const searchInput = document.querySelector('.search input');
    
//         const performSearch = () => {
//             displayRandomCountries();
//         };
    
//         searchInput && searchInput.addEventListener('input', performSearch);
//     };

//     const setupRegionClick = () => {
//         const regionsContainer = document.querySelector('.side-list');
        
//         regionsContainer && regionsContainer.addEventListener('click', (event) => {
//             if (event.target.tagName === 'A') {
//                 currentRegion = event.target.textContent;
//                 displayRandomCountries();
//                 const labelForRegion = document.querySelector('label[for="burger"]');
//                 labelForRegion.textContent = `Region: ${currentRegion}`;

//                 localStorage.setItem('selectedRegion', currentRegion);
//             }
//         });
//     }

//     const setupRegionsNavigation = () => {
//         const regionsContainer = document.querySelector('.side-list');
//         const uniqueRegions = [...new Set(countriesData.map(country => country.region))];
        
//         uniqueRegions.forEach(region => {
//             regionsContainer.innerHTML += `<li><a href="#${region}">${region}</a></li>`;
//         });
//     }

//     const checkbox = document.getElementById('background-toggle-button');
//     const body = document.body;
    
//     checkbox.addEventListener('change', (e) => {
//       e.target.checked
//         ? body.classList.replace('white-background', 'black-background')
//         : body.classList.replace('black-background', 'white-background')
      
//       localStorage.setItem('theme', e.target.checked ? 'dark' : 'light');
//     });       
    
//     loadCountryAPI();

//     const filterCountriesBySearchTerm = (countries, searchTerm) => {
//         if (!searchTerm) {
//             return countries;
//         }
    
//         return countries.filter(country =>
//             country.name.common.toLowerCase().includes(searchTerm)
//         );
//     }
    
//     const filterCountriesByRegion = (countries, region) => {
//         return countries.filter(country => country.region === region);
//     }

//     const burger = document.getElementById('burger');
//     const nav = document.querySelector('.nav');

//     nav.addEventListener('click', function(event) {
//         if (event.target.tagName === 'A') {
//             burger.checked = false;
//         }
//     });  

//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//         checkbox.checked = savedTheme === 'dark';
//         body.classList.toggle('black-background', checkbox.checked);
//         body.classList.toggle('white-background', !checkbox.checked);
//     }
// }

// initCountriesPage();


"use strict";

function initCountriesPage() {
    let countriesData = [];
    let currentRegion = null;

    const loadCountryAPI = () => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                countriesData = data;
                displayRandomCountries();
                setupSearch();
                setupRegionClick();
                setupRegionsNavigation(); 
            })
            .catch(error => console.error('Error fetching countries:', error));
    }

    const getRandomCountries = (countries, count) => {
        const shuffledCountries = countries.slice().sort(() => 0.5 - Math.random());
        
        return shuffledCountries.slice(0, count);
    }

    const displayCountries = cards => {
        const container = document.getElementById('cards');
        
        container.innerHTML = cards.map(country => getCountryHTML(country)).join('');
    }

    const getCountryHTML = (country) => {
        return `
            <li class="card">
                <img src="${country.flags.png}" alt="Country">
                <div class="info">
                    <h2>Country: ${country.name.common}</h2>
                    <h3>Population: ${country.population}</h3>
                    <h3>Region: ${country.region}</h3>
                    <h3>Capital: ${country.capital}</h3>
                </div>
            </li>
        `;
    }

    const displayRandomCountries = () => {
        let filteredCountries = countriesData;
        const searchTerm = document.querySelector('.search input').value.trim().toLowerCase();
        
        filteredCountries = filterCountriesBySearchTerm(filteredCountries, searchTerm);

        if (currentRegion) {
            filteredCountries = filterCountriesByRegion(filteredCountries, currentRegion);
        }
    
        const randomCountries = getRandomCountries(filteredCountries, 8);
        displayCountries(randomCountries);
    }
    
    const setupSearch = () => {
        const searchInput = document.querySelector('.search input');
    
        const performSearch = () => {
            displayRandomCountries();
        };
    
        searchInput && searchInput.addEventListener('input', performSearch);
    };

    const setupRegionClick = () => {
        const regionsContainer = document.querySelector('.side-list');
        
        regionsContainer && regionsContainer.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                currentRegion = event.target.textContent;
                displayRandomCountries();
                const labelForRegion = document.querySelector('label[for="burger"]');
                labelForRegion.textContent = `Region: ${currentRegion}`;

                localStorage.setItem('selectedRegion', currentRegion);
            }
        });
    }

    const setupRegionsNavigation = () => {
        const regionsContainer = document.querySelector('.side-list');
        const uniqueRegions = [...new Set(countriesData.map(country => country.region))];
        
        uniqueRegions.forEach(region => {
            regionsContainer.innerHTML += `<li><a href="#${region}">${region}</a></li>`;
        });
    }

    const toggleTheme = () => {
        const checkbox = document.getElementById('background-toggle-button');
        const body = document.body;
        
        checkbox && checkbox.addEventListener('change', (e) => {
            e.target.checked
                ? body.classList.replace('white-background', 'black-background')
                : body.classList.replace('black-background', 'white-background')
            
            localStorage.setItem('theme', e.target.checked ? 'dark' : 'light');
        });       

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            checkbox.checked = savedTheme === 'dark';
            body.classList.toggle('black-background', checkbox.checked);
            body.classList.toggle('white-background', !checkbox.checked);
        }
    };

    toggleTheme();
    
    loadCountryAPI();

    const filterCountriesBySearchTerm = (countries, searchTerm) => {
        if (!searchTerm) {
            return countries;
        }
    
        return countries.filter(country =>
            country.name.common.toLowerCase().includes(searchTerm)
        );
    }
    
    const filterCountriesByRegion = (countries, region) => {
        return countries.filter(country => country.region === region);
    }

    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav');

    nav && nav.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            burger.checked = false;
        }
    });  
}

initCountriesPage();
