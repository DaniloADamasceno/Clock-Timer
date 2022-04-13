const relogioJS = document.querySelector('.relogio');            // Selecionar o Relogio
const iniciar = document.querySelector('.iniciar');              // Selecionar o botão Iniciar 
const pausar = document.querySelector('.pausar');                // Selecionar o botão Pausar
const zerar = document.querySelector('.zerar');                  // Selecionar o botão Zerar 
let second = 0;                                                  // Declarando a variavel Segundos
let timerClock;
//----- ---------------------------------------Funções do Clock--------------------------------------------------------------------
function getClockSeconds (second_1) {
    const ContRelogio = new Date(second_1 * 1000);
    return ContRelogio.toLocaleTimeString('pt-BR', {
        hour12: false,                              
        timeZone: 'UTC'                                           // para Zerar a Hora
    });
}
function getclock () {
        timerClock = setInterval(function() {
        second ++;
        relogioJS.innerHTML = getClockSeconds(second);           // para ser atualizado 
    }, 1000);                                                    // intervalo de 1 em 1 segundo
};
//-------------------------- Realização dos eventos ---------------------------------------------------------------------------------

iniciar.addEventListener('click', function(event) {
    relogioJS.classList.remove('pausado');                       // para remover a Classe Pausado
    clearInterval(timerClock);                                   // para sempre Zera o contador caso eu click 2x no iniciar e ele não fique brigando pelos segundos
    getclock();                                                  // para chamar a Função do Relogio 
});

pausar.addEventListener('click', function(event) {
    relogioJS.classList.add('pausado');                          // Para adicionar a Classe Pausado
    clearInterval(timerClock);                                   // Para Pausar o Relogio
});

zerar.addEventListener('click', function(event) {
    relogioJS.classList.remove('pausado');                        // para remover a Classe Pausado
    clearInterval(timerClock);                                    // Para Zerar o Relogio 
    relogioJS.innerHTML = '00:00:00';                             // Apos Zerar o Relogio Voltar para a opção inicial
    second =0;
});

//?-------------------------------------- Maneira Simplificada da Realização dos Eventos------------- ----------------------------------------



document.addEventListener('click', function(simplified_event) {   // Criar um Evento simplificado pra capturar todos os clicks da pagina 
    const simplified = simplified_event.target;                   // capturar o elemento do click

    //------------ Criar um condicional para o evento 

    if (simplified.classList.contains('zerar')) {                 // pegar a classe Zerar e Aplicar a regra abaixo
        relogioJS.classList.remove('pausado');                    // para remover a Classe Pausado
        clearInterval(timerClock);                                // Para Zerar o Relogio 
        relogioJS.innerHTML = '00:00:00';                         // Apos Zerar o Relogio Voltar para a opção inicial
        second =0; 
    }
    if (simplified.classList.contains('pausar')) {                // pegar a classe pausar e Aplicar a regra abaixo
        relogioJS.classList.add('pausado');                       // Para adicionar a Classe Pausado
        clearInterval(timerClock);                                // Para Pausar o Relogio
    }
    if (simplified.classList.contains(iniciar)) {
        relogioJS.classList.add('pausado');                       // Para adicionar a Classe Pausado
        clearInterval(timerClock);                                // Para Pausar o Relogio
    }
}); 



