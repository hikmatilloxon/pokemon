var elForm = document.querySelector("[data-form]");
var elInputUrl = document.querySelector("[data-url]");
var elInputName = document.querySelector("[data-name]");
var elInputType = document.querySelector("[data-type]");
var elInputKg = document.querySelector("[data-kg]");
var elInputTall = document.querySelector("[data-tall]");
var elDataWrap = document.querySelector("[data-wrap]");


elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var pokemon = {
    name: null,
    img: null,
    type:{},
    elInputKg: null,
    elInputTall: null,
  };
  
  
  elInputUrl.value = "";
  elInputName.value = "";
  elInputType.value = "";
  elInputKg.value = "";
  elInputTall.value = "";
  
  pokemon.name = elInputName.value;
  pokemon.type = elInputType.value.split(",");
  pokemon.img = elInputUrl.value;
  pokemon.elInputTall = elInputTall.value;
  pokemons.unshift(pokemon);
  pokemon.elInputKg = elInputKg.value;

  elDataWrap.prepend(createDiv(pokemon));
});

renderPokemons();

function renderPokemons() {
  for (var i = 0; i < pokemons.length; i++) {
    var pokemon = pokemons[i];
    
    elDataWrap.append(createDiv(pokemon));
  }
}

function joinArray(arr, separator = "") {
  var str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];

    if (i !== arr.length - 1) {

      str += separator;

    }
  }
  return str;
}
function createDiv(pokemon) {
  var elDivCard = document.createElement("div");
  var elImg = document.createElement("img");
  var elDivBody = document.createElement("div");

  var elh5 = document.createElement("h5");
  var elP = document.createElement("p");
  var elh6 = document.createElement("h6");

  var elSpan = document.createElement("span");
  var elSpan1 = document.createElement("span");
  var elBtn = document.createElement("button");
  
  elDivCard.classList.add("card");
  elImg.classList.add("card-img-top");
  elDivBody.classList.add("card-body");
  elBtn.classList.add("btn-danger");
  elSpan.classList.add("span");
  elh6.append(elSpan, elSpan1);
  elDivBody.append(elh5, elP, elh6,);
  elDivCard.append(elImg, elDivBody);

  elImg.src = `${pokemon.img}`;
  elImg.alt = pokemon.title;
  elh5.textContent = `${pokemon.name}`;
  elSpan.textContent = `${pokemon.elInputKg}`;
  elSpan1.textContent = `${pokemon.elInputTall}`;
  elP.textContent = joinArray([pokemon.type]);


  return elDivCard;
}



