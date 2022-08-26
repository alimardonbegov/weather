export function getPopulation(cond) {
    let population;
    if (cond > 1000000 && Math.floor(cond / 1000000) !== cond / 1000000) {
        population = (cond / 1000000).toFixed(2) + " M";
    } else if (cond > 1000000 && Math.floor(cond / 1000000) === cond / 1000000) {
        population = cond / 1000000 + " M";
    } else if (cond === 1000000 || cond === 0) {
        population = "N/D";
    } else if (cond >= 1000 && cond < 1000000) {
        population = Math.round(cond / 1000) + " K";
    } else {
        population = cond;
    }
    return population;
}
