// in order to call function you need to define it first
async function makeReq() {
  _input = document.querySelector("input").value;

  console.log(_input);
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${_input}`);
  const data = await res.json();
  // console.log(data);
  document.getElementsByClassName("normal").src = data.sprites.front_default;

  return data;
}

// async function modifyDOM(data) {
//   console.log(data.sprites.front_default);
//   document.getElementsByClassName("normal").src = data.sprites.front_default;
// }

document.querySelector("button").addEventListener("click", makeReq);
const data = makeReq();
console.log(data);
// modifyDOM(data);
// document.getElementsByClassName("normal").src = data.sprites.front_default;
