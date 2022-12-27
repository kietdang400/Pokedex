
const input=document.querySelector('#pokemon-name');
const submit=document.querySelector('input[type=submit]');
const showPokemon=document.querySelector('.body-pokemon');
const form=document.querySelector('form');
const questionMark=document.querySelector('.question-mark');

console.log(questionMark)

 form.addEventListener('submit',pokemon)


   
async function pokemon(e){
e.preventDefault();
console.log(input.value)

if(input.value.length===0){

}

    const description=await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value.toLowerCase()}`);
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
          <span>${types.map((x)=>{return x + '';})}</span> 
        </h2>
      </div>
      <div class='hp'>
      <h2>
      HP:

      <h3><span>${data.stats[0].base_stat}</span> </h3>

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
questionMark.toggle();

console.log(data.stats[0].stat.name)
console.log(data.weight)
console.log(data.attributes.pitch)
};



/*async function pokemon(e){
e.preventDefault();
    const description=await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data=await description.json();
    event.preventDefault();
console.log(data)
}
pokemon()*/



