function Pokemon(nombre,color,poderDeAtaque,nivelDeAmistad,vida){
	this.nombre = nombre;
	this.color = color;
	this.nivelDeAmistad = nivelDeAmistad;
	this.vida = vida;

	this.nivelDeAmistad = 0

//  this.vida = 100
	this.poderDeAtaque = poderDeAtaque


	this.mostrarPokemon = function(){
		return("Hola, soy: " + this.nombre + "y soy de color: " + this.color)
	};

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
		return this.nivelDeAmistad;
	};

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
		var resultado;
		if(pokemon.vida <= 0){
			resultado = 0;
		} else {
			resultado = pokemon.vida;
		}
		return resultado;
	}
}
const Pikachu = new Pokemon("Pikachu", "amarillo",100)
const Charmander = new Pokemon("Charmander","rojo",20)

Pikachu.atacar(Charmander)

function botonPelear(){
    var option1 = document.getElementById("choosePokemon1").value;
    var option2 = document.getElementById("choosePokemon2").value;
    
    if(option1 == option2){
        alert("Elige otro Pokemon, no pueden ser iguales");
        return;
    }
    
    var ataqueUno = prompt("Ingresa poder de ataque del primer Pokemon");
    var ataqueDos = prompt("Ingresa poder de ataque del segundo Pokemon");

    var pokemon1 = new Pokemon (option1,"amarillo",ataqueUno);
    var pokemon2 = new Pokemon(option2,"rojo",ataqueDos);

    var attack = pokemon1.atacar(option2);
    var tagResultado = document.getElementById("resultado");
    var textoResultado = option1 + " ataco a " + option2 + " y " +  option2 + " tiene una vida de : " + (charmander.vida - ataqueUno);    

    tagResultado.innerHTML = textoResultado;

}
/*
function peleaPokemon(){
	var selectUno = document.getElementById("elegir-pokemon").value;
	var selectDos = document.getElementById("elegir-pokemon-dos").value;

	if(selectUno == selectDos){
		alert("No puedes hacer Pelear dos pokemones Iguales")
		return;
	}

	var ataqueUno = prompt("Ingresa poder de ataque del primer Pokemon");
	var ataqueDos = prompt("Ingresa poder de ataque del segundo Pokemon");

	var pimerPoke = new Pokemon (selectUno,"amarillo",ataqueUno)
	var segundoPoke = new Pokemon (selectDos,"rojo",ataqueDos)



	
	var ataque = pimerPoke.atacar(selectDos);
	var etiquetaResultado = document.getElementById("resultado");
	var textoResultado = selectUno + " ataco a " + selectDos + " y " +  selectDos + " tiene una vida de : " + segundoPoke.vida ;	

	etiquetaResultado.innerHTML = textoResultado;

}



