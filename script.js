var clique = document.querySelectorAll('.player-options div > img');
var playerOpt = '';
var enemyOpt = '';
var emp = 0;
var jog = 0;
var maq = 0;

// Validação do vencedor do jogo
function validarVitoria(){

    let jogador = document.querySelector('.jogador');
    let maquina = document.querySelector('.maquina');
    let empate = document.querySelector('.empate');

    if (playerOpt == 'rock'){
        if (enemyOpt == 'rock'){
            emp += 1;
            empate.innerHTML = emp;
        } else if (enemyOpt == 'paper'){
            maq += 1;
            maquina.innerHTML = maq;
        } else if (enemyOpt == 'scissor'){
            jog += 1;
            jogador.innerHTML = jog;
        }
    }

    else if (playerOpt == 'paper'){
        if (enemyOpt == 'rock'){
            jog += 1;
            jogador.innerHTML = jog;
        } else if (enemyOpt == 'paper'){
            emp += 1;
            empate.innerHTML = emp;
        } else if (enemyOpt == 'scissor'){
            maq += 1;
            maquina.innerHTML = maq;
        }
    }

    else if (playerOpt == 'scissor'){
        if (enemyOpt == 'rock'){
            maq += 1;
            maquina.innerHTML = maq;
        } else if (enemyOpt == 'paper'){
            jog += 1;
            jogador.innerHTML = jog;
        } else if (enemyOpt == 'scissor'){
            emp += 1;
            empate.innerHTML = emp;
        }
    }
}

// Resetar a opacidade para 0.3 do player
function resetOpacityPlayer(){
    for (cont = 0; cont < clique.length; cont++){
        clique[cont].style.opacity = 0.3;
    }    
}

// Resetar a opacidade para 0.3 do enemy
function resetEnemy(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for (cont = 0; cont < enemyOptions.length; cont++){
        enemyOptions[cont].childNodes[0].style.opacity = 0.3;
    }    
}

// Geração da jogada aleatória do enemy
function jogadaEnemy(){
    let rand = Math.floor(Math.random()*3);
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    
    resetEnemy();
    for (cont = 0; cont < enemyOptions.length; cont++){
        if (cont == rand){
            enemyOptions[cont].childNodes[0].style.opacity = 1;
            enemyOpt = enemyOptions[cont].childNodes[0].getAttribute('opt');
        }
    }
}

// Jogadas do player seguida da função para jogada do enemy
for (cont = 0; cont < clique.length; cont++){
    clique[cont].addEventListener('click', (t)=>{
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        jogadaEnemy();
        validarVitoria();
    });
}
