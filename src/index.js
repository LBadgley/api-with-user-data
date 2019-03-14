import meals from '../data/meals.js';
import renderMealCards from './meal-card-components.js';
import './search-component.js';
import './paging-component.js';
import { readFromQuery } from './hash-query.js';

renderMealCards(meals);

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    console.log(queryOptions);
});
// fetch('https://www.food2fork.com/api/search?key=3029508e03964e2df91e90df762c09cd&q=chicken%20breast&page=2')
//     .then(response => response.json())
//     .then(body => console.log(body));
    
