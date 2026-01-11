
async function pokeapi() {
  const URL = "https://pokeapi.co/api/v2/pokemon/ditto";
  let response = await fetch(URL);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const data = await response.json();
  try {
    console.log(data);
  } catch (error) {
    console.error("Error al mostrar la información del clima:", error);
  }
}

document.getElementById("pokeApiButton").addEventListener("click", pokeapi);

async function rawgApi() { 
    const KEY = "644125e357c649adb280fdd204c9c04f";
    const URL = `https://api.rawg.io/api/games/38015?key=${KEY}`;
    let response = await fetch(URL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    try {
        console.log(data);
    } catch (error) {
        console.error("Error al mostrar la información del juego:", error);
    }
}
document.getElementById("rawgApiButton").addEventListener("click", rawgApi);

async function dndApi() {
    const URL = "https://www.dnd5eapi.co/api/spells/acid-arrow";
    let response = await fetch(URL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    try {
        console.log(data);
    } catch (error) {
        console.error("Error al mostrar la información del hechizo:", error);
    }
}
document.getElementById("dndApiButton").addEventListener("click", dndApi);