console.log("Script enlazado");

(function () {
    // document.querySelectorAll('button[data-page]').forEach(button => {
    //     button.addEventListener('click', async () => {
    //         const page = button.dataset.page;
    //         try {
    //             let container = document.querySelector('.container');
    //             container.classList.add('fade-in');
    //             const response = await fetch(page);
    //             if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    //             const data = await response.text();
    //             function delay() {
    //                 setTimeout(() => {
    //                     container.innerHTML = data;
    //                     container.classList.remove('fade-in');
    //                 }, 500);
    //             }
    //             delay();
    //         } catch (error) {
    //             console.error("Error al cargar la página:", error);
    //         }
    //     });
    // });

    let displayWeather = document.getElementById('weatherResult');
    let searchButton = document.getElementById('searchWeather');

    async function getWeather(city) {
        const API_KEY = '44b8093e04d18eccac5a1567f179cc6e';
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`;
        let response = await fetch(URL);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        try {
            let temperature = data.main.temp;
            let weatherIcon = data.weather[0].icon;
            let temperatureClass = "";
            let temperatureIcon = "";
            switch (true) {
                case temperature > 30:
                    temperatureClass += " temperature-alert";
                    temperatureIcon += " weather-icon-alert";
                    break;
                case temperature > 14:
                    temperatureClass += " temperature-warm";
                    temperatureIcon += " weather-icon-warm";
                    break;
                default:
                    temperatureClass += " temperature-cold";
                    temperatureIcon += " weather-icon-cold";
            }
            displayWeather.classList.replace('d-none', 'd-block');
            displayWeather.innerHTML = `
            <h2>Clima en ${data.name}</h2>
            <p>Temperatura: <span class="${temperatureClass}">${temperature}°C</span></p>
            <img class="${temperatureIcon}" src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="${data.weather[0].description}"> `;

        } catch (error) {
            console.error("Error al mostrar la información del clima:", error);
        }
    }

    searchButton.addEventListener('click', () => {
        let city = document.getElementById('cityInput').value;
        getWeather(city);
    });
})();
