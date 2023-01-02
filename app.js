
const input=document.querySelector('#pokemon-name');
const submit=document.querySelector('input[type=submit]');
const showPokemon=document.querySelector('.body-pokemon');
const form=document.querySelector('form');
const questionMark=document.querySelector('.question-mark');
const random=document.querySelector('#random');



form.addEventListener('submit',function(e){
e.preventDefault();
pokemon(input.value)
})

random.addEventListener('click',function(){
  let randomNumber=Math.floor(Math.random()*900);
  pokemon(randomNumber);
})


async function pokemon(value){

let dataType=value
  if(typeof value==='string'){
dataType=value.toLowerCase();
  }
    const description=await fetch(`https://pokeapi.co/api/v2/pokemon/${dataType}`);
    const data=await description.json();

    const types=[];
    
for(let i=0;i<data.types.length;i++){

    types.push(data.types[i].type.name)
}

showPokemon.innerHTML=`
<div class='container'>
        <img
        src=${data.sprites.front_default}
        alt=""
        id="pokemon-picture"
      />
      <div class='names'>
        <h2>
          Name: <span>${data.species.name}</span>
        </h2>
      </div>
      <div class='types'>
        <h2>
          Type: 
        </h2>
        <span id='color-types'>${types[0]}</span>
      </div>
      <div class='hp'>
      <h2>
      HP:
      <h3><span>${data.stats[0].base_stat}</span></h3>
      </h2>
      </div>
      <div class='height'>
      <h2>
      Height:
      <h3>${data.height} ft</h3>
      </h2>
      </div>
      <div class='weight lb'>
      <h2>
      Weight:
      <h3>${data.weight} lb</h3>
      </h2>
      </div>
      </div>
      `;

input.value='';

//Toggle Pokemon front and back
const container=document.querySelector('.container');

  let switching=true;
container.children[0].addEventListener('mouseenter',function(){

  if(switching==true){
    container.children[0].setAttribute('src',data.sprites.back_default);
    switching=false;
  }
  else if(switching==false){
    container.children[0].setAttribute('src',data.sprites.front_default);
  switching=true;
  }
  
})

//append new span
const typesContainer=document.querySelector('.types');
let type2=''
if(types.length>1){
const newSpan=document.createElement("span");
newSpan.setAttribute('id','color-types1');
newSpan.innerHTML=`${types[1]}`
typesContainer.appendChild(newSpan);
type2=document.querySelector('#color-types1');
}

//Changing color of Types
const colorTypes=document.querySelector('#color-types');
function colorsOfPokemon(color,span){
  switch(color){
     case 'normal':
span.setAttribute('style','color:white');
break;
    case 'fire':
span.setAttribute('style','color:red');
break;
 case 'water':
span.setAttribute('style','color:blue');
break;
 case 'grass':
span.setAttribute('style','color:green');
break;
 case 'electric':
span.setAttribute('style','color:yellow');
break;
 case 'ice':
span.setAttribute('style','color:rgb(135,206,250)');
break;
case 'fighting':
span.setAttribute('style','color:#FF8C00');
break;
case 'ghost':
span.setAttribute('style','color:purple');
break;
case 'poison':
span.setAttribute('style','color:rgb(153,50,204)');
break;
case 'ground':
span.setAttribute('style','color:#654321');
break;
case 'psychic':
span.setAttribute('style','color:rgb(221,160,221)');
break;
case 'bug':
span.setAttribute('style','color:#66FF00');
break;
case 'rock':
span.setAttribute('style','color:#707070');
break;
case 'dragon':
span.setAttribute('style','color:	rgb(204,204,0)');
break;
case 'dark':
span.setAttribute('style','color:	black');
break;
case 'steel':
span.setAttribute('style','color:	#43464B');
break;
case 'fairy':
span.setAttribute('style','color:	pink');
break;
  }
}
colorsOfPokemon(types[0],colorTypes);
colorsOfPokemon(types[1],type2);
};




