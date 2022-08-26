export function getVisibility(cond) {
    let visibility;
    if (cond > 1000 && Math.floor(cond / 1000) !== cond / 1000) {
        visibility = (cond / 1000).toFixed(1) + " km";
    } else if (cond > 1000 && Math.floor(cond / 1000) === cond / 1000) {
        visibility = cond / 1000 + " km";
    } else {
        visibility = cond + " meters";
    }

    return visibility;
}
