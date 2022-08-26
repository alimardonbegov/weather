function getDate(num) {
    const fullDate = new Date(num * 1000);
    const day = fullDate.getDate();
    const month = fullDate.getMonth(); // от 0 до 11
    const year = fullDate.getFullYear(); // от 1 до 31
    const currentDate = new Date(year, month, day);
    return currentDate;
}

function getHour(num) {
    const fullDate = new Date(num * 1000);
    const hour = fullDate.getHours();
    return hour;
}

function geterateResult(list) {
    const forecastByDay = [];
    list.map((item) => {
        const date = getDate(item.dt).toLocaleString("en-US", { weekday: "short" });
        const hour = getHour(item.dt);
        const temp = item.main.temp;
        const description = item.weather[0].description;
        const icon = item.weather[0].icon;
        const wind = item.wind.speed;
        const clouds = item.clouds.all;
        const humidity = item.main.humidity;
        if (hour === 15) {
            forecastByDay.push({ date, temp, description, icon, wind, clouds, humidity });
        }
    });
    return forecastByDay;
}

export default geterateResult;
