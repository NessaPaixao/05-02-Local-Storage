// function mostrarMouse(event){
//     console.log(`Eixo X: ${event.pageX} e Eixo Y: ${event.pageY}`);
//     if( event.pageX == 1220 || event.pageY == 30){
//         alert("NÃOOOO SAIAAAAAA")
//     }
// }
// window.onmousemove = mostrarMouse;

let nome = document.querySelector ("#nome")
let sobrenome = document.querySelector ("#sobrenome")
let botao = document.querySelector ("button")
let mensagemInicial = document.querySelector ("p")
let redefinir = document.querySelector ("a")
let texto = document.querySelector ("h1")



if(localStorage.nome && localStorage.sobrenome){
    botao.style.display = "none";
    nome.style.display = "none";
    sobrenome.style.display = "none";
    texto.style.display = "none";
    mensagemInicial.innerHTML = `Seja bem vindo ${localStorage.nome} ${localStorage.sobrenome}`;
    redefinir.innerHTML = `Se você não for ${localStorage.nome}, clique aqui`

}

else{
    function armazenarDados(){
        localStorage.setItem('nome',nome.value);
        localStorage.setItem('sobrenome',sobrenome.value);
        mensagemInicial.innerHTML = `Seja bem vindo ${localStorage.nome} ${localStorage.sobrenome}`;
        redefinir.innerHTML = `Se você não for ${localStorage.nome}, clique aqui!`
        botao.style.display = "none";
        nome.style.display = "none";
        sobrenome.style.display = "none";
        texto.style.display = "none";
    }
}

function reinciar(){
    localStorage.clear();
}

botao.onclick = armazenarDados;
redefinir.onclick = reinciar;

