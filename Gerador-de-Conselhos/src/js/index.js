const button = document.querySelector('.logoButton');
const textoConselho = document.querySelector('.cardText');
const idConselho = document.getElementById("numero-conselho");

button.addEventListener('click', async () =>{
  let textoConselhoAleatorio = await escolhendoConselhoAleatorio()
  let idValor = await pegandoIdDoConselho()
  
  idConselho.innerHTML = `#${idValor}`
  textoConselho.innerHTML = textoConselhoAleatorio
});

async function gerarConselhoAleatorio (){
  const url = "https://api.adviceslip.com/advice"
  const resposta = await fetch(url)
  
  return await resposta.json();
}

async function escolhendoConselhoAleatorio(){
  const conselhoJson = await gerarConselhoAleatorio()
  const conselho = conselhoJson.slip.advice
  return await conselho;
}

async function pegandoIdDoConselho(){
  const conselhoJson = await gerarConselhoAleatorio()
  const idDoConselhoEscolhido = conselhoJson.slip.id
  
  return await idDoConselhoEscolhido;
}

