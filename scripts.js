const endpoint = "https://pokeapi.co/api/v2/pokemon/"

async function obtenerPokemon(){
    let pokemonId = document.getElementById("pokemon").value
    finalEndpoint = endpoint + pokemonId.val
    const response = await fetch(endpoint + pokemonId)
    const data = await response.json()
    
    
    document.getElementsByTagName('h2')[0].innerHTML= data.name
    let divisor = document.getElementById("pokedex")
    
    var item = divisor.querySelector ('.pokemon-img')
    console.log(item)
    if (item){
        divisor.removeChild (item)
    }

    let img = document.createElement("img")
    let contenido = data.sprites.front_default
    img.setAttribute("src", contenido )
    img.setAttribute("class", "pokemon-img" )
    divisor.appendChild(img)

}