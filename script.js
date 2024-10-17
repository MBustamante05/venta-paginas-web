//Lógica piedra-papel-tijeras
const botChoices =[
  {piedra: "puno.png"},
  {papel: "papel.png"},
  {tijera: "tijeras.png"},
]
const userChoices = [
  {
    div: document.getElementById("piedra-u"), gana: "tijera", pierde: "papel", empate:"piedra"
  },
  {
    div:document.getElementById("papel-u"),
    gana: "piedra", pierde: "tijera", empate: "papel"
  },
  {
    div: document.getElementById("tijera-u"), gana: "papel", pierde: "piedra", empate: "tijera"
  }
]
const finalChoices = [
  {empate: "empate.png"},
  {gana: "gana.png"},
  {pierde: "pierde.png"},
]

const botChoice = document.getElementById("bot-choice"),
      botDiv = document.getElementById("bot"),
      messageDiv = document.getElementById("message-div");
let trys = 3;

userChoices.forEach(choice =>{
  const div = choice.div;
  div.addEventListener("click", ()=>{
    botChoice.style.display = "block";
    //Generar elección del bot
    bot();
    //Partida - Elección
    elecciones(choice);
    setTimeout((e) =>{
      botChoice.style.display = "none";
    },2000)
  })
})

function bot(){
  //Reiniciar elección
  botDiv.innerHTML = "";
  //Generar elección random del bot
  let random_num = Math.floor(Math.random() * botChoices.length);
  console.log(random_num);
  
  const img = document.createElement("img");
  img.src = "src/" + Object.values(botChoices[random_num])[0];
  botDiv.append(img)
}

function elecciones(choice){
  // Obtener la imagen que el bot ha mostrado
  const botSrc = botDiv.querySelector("img").src;
  
  const botKeys = botChoices.find(botObj => {
    console.log(botSrc.includes(Object.values(botObj)[0]));
    
    return botSrc.includes(Object.values(botObj)[0]);
  });
  //Obtener los valores
  const botKey = Object.keys(botKeys)[0];
  console.log(botKey);
  
  let resultado = "";
  if(choice.empate === botKey){
    
    resultado = "empate";
  }else if(choice.gana === botKey){
    resultado = "gana"
  }else{
    resultado = "pierde"
  }
  
  mostrarResultado(resultado);
}
function mostrarResultado(resultado){
  messageDiv.innerHTML = "";
  const finalChoice = finalChoices.find(choice => choice[resultado]);
  const img = document.createElement("img");
  img.src = "src/" + finalChoice[resultado];
  const h1 = document.createElement("h1");

  if (resultado === "gana") {
    h1.textContent = "Ganaste!!";
  } else if (resultado === "pierde") {
    h1.textContent = "Perdiste";
  } else {
    h1.textContent = "Es un empate";
  }
  messageDiv.appendChild(h1)
  messageDiv.appendChild(img);
  messageDiv.style.display = "block";
  setTimeout((e) =>{
    messageDiv.style.display = "none";
  },2000)
}

//LÓGICA FORMULARIO
const userName = document.getElementById("user-name"),
      userEmail = document.getElementById("user-email"),
      userMessage = document.getElementById("user-message"),
      formularioI = document.getElementById("formulario");

formularioI.addEventListener("submit", (e)=>{
  const user = userName.value.trim()
  const email = userEmail.value.trim()

  e.preventDefault();
  if(user === ""|| email === ""){
    return alert("Por favor completar los campos de Nombre y Correo Electrónico!!");
  }
  alert(`Hemos envíado correctamente toda la información a tu correo electrónico ${user}.` )
  formularioI.reset();
})