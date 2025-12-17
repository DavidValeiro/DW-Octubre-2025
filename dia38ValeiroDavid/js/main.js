console.log("Script enlazado");

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
    const apiKey = '44b8093e04d18eccac5a1567f179cc6e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`; 
    let response = fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    try {
        displayWeather.innerHTML = `
        <h2>Clima en ${data.name}</h2>
        <p>Temperatura: ${data.main.temp}°C</p>
        <p>Descripción: ${data.weather[0].description}</p>
    `;
    } catch (error) {
        console.error("Error al mostrar la información del clima:", error);
    }
}

searchButton.addEventListener('click', () => {
    let city = document.getElementById('cityInput').value;
    getWeather(city);
});
