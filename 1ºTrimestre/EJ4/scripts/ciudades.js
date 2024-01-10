const counts = {};
const listaCiudades = ["Madrid", "Barcelona", "Valencia",
    "Sevilla", "Zaragoza", "Málaga", "Madrid", "Barcelona",
    "Madrid", "Valencia", "Sevilla", "Madrid", "Zaragoza",
    "Málaga", "Madrid"];

listaCiudades.forEach( function (x) { 
    counts[x] = (counts[x] || 0) + 1; 
});

const countsArray = Object.entries(counts);

const sortedCount = countsArray.sort(
    function (a, b) {
        return b[1] - a[1];
    }
);
console.log(sortedCount);