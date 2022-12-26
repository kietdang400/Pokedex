
const input=document.querySelector('#pokemon-name');
const submit=document.querySelector('input[type=submit]');
const showPokemon=document.querySelector('.body-pokemon');
const form=document.querySelector('form');




 form.addEventListener('submit',pokemon)


   
async function pokemon(e){
e.preventDefault();
console.log(input.value)

if(input.value.length===0){

}

    const description=await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`);
    const data=await description.json();

    const types=[];
    
for(let i=0;i<data.types.length;i++){

    types.push(data.types[i].type.name)
}


showPokemon.innerHTML=`
        <img
        src=${data.sprites.front_default}
        alt=""
        id="pokemon-picture"
      />
      <div class='names'>
        <h1>
          Name:
          <h3>${data.species.name}</h3>
        </h1>
      </div>
      <div class='types'>
        <h1>
          Type:
          <h3>${types.map((x)=>{return x;})}</h3> 
        </h1>
      </div>
      `;

input.value='';


console.log(data)
};



/*async function pokemon(e){
e.preventDefault();
    const description=await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data=await description.json();
    event.preventDefault();
console.log(data)
}
pokemon()*/



