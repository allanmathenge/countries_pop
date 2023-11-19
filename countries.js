import {countries} from "./country-by-population.js"; 


//Sorting countries with the smallest to largest population

const from_small_to_largest = countries.sort((x, y) => {
    return x.population - y.population
})
console.log(from_small_to_largest)


// Print all countries whose name contain either p, s or k

const name_contains_p_s_k = countries.filter((count_name) => {
return(
    count_name.country.toLowerCase().includes("p") ||
    count_name.country.toLowerCase().includes("s") ||
    count_name.country.toLowerCase().includes("k")
)
})

name_contains_p_s_k;


// Countries whose populations are perfect squares

const perfect_square_pop = countries.filter((count) => {
    return Math.sqrt(count.population) %1 === 0;
})
perfect_square_pop


// Countries whoes populations are odd number and has 5, 6 or 7 letters


let arr = [];
const country_name_length = countries.filter(( name ) => {
    return (
        name.country.length === 5 && name.population / 2 %1 !== 0 ||
        name.country.length === 6 && name.population / 2 %1 !== 0 ||
        name.country.length === 7 && name.population / 2 %1 !== 0

    )
});

arr.push(...country_name_length);


//Sort countries based on the length of its name

const sort_country_name = countries.sort((x, y) => {
    return x.country.length - y.country.length
})

sort_country_name