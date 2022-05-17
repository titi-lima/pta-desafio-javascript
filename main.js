// recebem a animacao do personagem linkada no html
const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];  


const VELOCITY = 10; // constante que define a "velocidade" do personagem, sendo usada no codigo para adicionar/subtrair da posicao atual

const SCREEN_WIDTH = screen.width; // cria uma constante que representa a largura da tela
const SCREEN_HEIGHT = screen.height; // cria uma constante que representa a altura da tela

let xPosition = 500; // posicao inicial do personagem em x
let yPosition = 300; // posicao inicial do personagem em y

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"] //array de teclas disponiveis no joguinho
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; // array de direcoes para as teclas no joguinho

window.addEventListener("keydown", (event) => { // ativa sempre que uma tecla for apertada
    const key  = event.key; // recebe a tecla pressionada

    // cria variavel booleana que checa se a tecla pressionada se encontra no array de teclas disponiveis
    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key; // "true" se estiver no array ou false caso contrario
    })

    if(!keyPressedAvaiable) return; //nao faz nada se a tecla pressionada nao estiver no array

    directions.forEach((direction) => { // itera o array de direcoes
        if(character.classList.contains(direction)) character.classList.remove(direction); // "limpa" a direcao antiga que o personagem estava se movimentando
    })

    // se a seta para cima estiver pressionada e nao ultrapassar o limite superior, movimenta o personagem para cima
    if(key === "ArrowUp" && yPosition > 0){
        character.classList.add("turnUp"); // adiciona a direcao para cima no personagem
        yPosition -= VELOCITY; // subtrai porque o ponto (0, 0) encontra-se no canto superior esquerdo
    }

    // se a seta para baixo estiver pressionada e nao ultrapassar o limite inferior, movimenta o personagem para baixo
    if(key === "ArrowDown" && yPosition < SCREEN_HEIGHT-200){ // ps: simplesmente "yPosition < SCREEN_HEIGHT" nao eh o suficiente, visto que o personagem e seu container nao sao pontos adimensionais
        character.classList.add("turnDown"); // adiciona a direcao para baixo no personagem
        yPosition += VELOCITY; // adiiona porque o ponto (0, 0) encontra-se no canto superior esquerdo
    }

    // se a seta para a esquerda estiver pressionada e nao ultrapassar o limite esquerdo, movimenta o personagem para a esquerda
    if(key === "ArrowLeft" && xPosition > 0){
        character.classList.add("turnLeft"); // adiciona a direcao para a esquerda no personagem
        xPosition -= VELOCITY; // subtrai porque o ponto (0, 0) encontra-se no canto superior esquerdo
    }

    // se a seta para a direita estiver pressionada e nao ultrapassar o limite direito, movimenta o personagem para a direita
    if(key === "ArrowRight" && xPosition < SCREEN_WIDTH-100){
        character.classList.add("turnRight"); // adiciona a direcao para a direita no personagem
        xPosition += VELOCITY; // adiciona porque o ponto (0, 0) encontra-se no canto superior esquerdo
    }

    // define o desenho do personagem de acordo com a posicao
    containerCharacter.style.top = `${yPosition}px`; // desenha do personagem de acordo com a posicao em y
    containerCharacter.style.left = `${xPosition}px` // desenha o personagem de acordo com a posicao em x
});
