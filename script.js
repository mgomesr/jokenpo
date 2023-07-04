var clique = document.querySelectorAll('.player-options div > img');
var playerOpt = '';
var enemyOpt = '';

// Validação do vencedor do jogo
function validarVitoria(){

    let winner = document.querySelector('.winner');

    if (playerOpt == 'rock'){
        if (enemyOpt == 'rock'){
            winner.innerHTML = 'Jogo Empatado!';
        } else if (enemyOpt == 'paper'){
            winner.innerHTML = 'Vitória do Computador!';
        } else if (enemyOpt == 'scissor'){
            winner.innerHTML = 'Vitória do Jogador!';
        }
    }

    else if (playerOpt == 'paper'){
        if (enemyOpt == 'rock'){
            winner.innerHTML = 'Vitória do Jogador!';
        } else if (enemyOpt == 'paper'){
            winner.innerHTML = 'Jogo Empatado!';
        } else if (enemyOpt == 'scissor'){
            winner.innerHTML = 'Vitória do Computador!';
        }
    }

    else if (playerOpt == 'scissor'){
        if (enemyOpt == 'rock'){
            winner.innerHTML = 'Vitória do Computador!';
        } else if (enemyOpt == 'paper'){
            winner.innerHTML = 'Vitória do Jogador!';
        } else if (enemyOpt == 'scissor'){
            winner.innerHTML = 'Jogo Empatado!';
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