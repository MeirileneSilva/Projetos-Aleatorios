// Array para armazenar os elementos dos containers
let containers = document.querySelectorAll(".container");

// Arrays para armazenar os valores iniciais, finais e velocidades de progresso de cada container
let progressStartValues = [0, 0, 0, 0, 0, 0];
let progressEndValues = [90, 75, 60, 50, 30, 70];
let speeds = [100, 150, 200, 120, 180, 160];

// Iterar sobre os containers e atualizá-los
for (let i = 0; i < containers.length; i++) {
    let circularProgress = containers[i].querySelector(".circular-progress");
    let progressValue = containers[i].querySelector(".progress-value");
    let progressStartValue = progressStartValues[i];
    let progressEndValue = progressEndValues[i];
    let speed = speeds[i];

    // Chamar a função de atualização de progresso para cada container
    updateProgress(progressStartValue, progressEndValue, speed, circularProgress, progressValue);
}

function updateProgress(progressStartValue, progressEndValue, speed, circularProgress, progressValue) {
    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#1E90FF	 ${progressStartValue * 3.6}deg, #87CEFA 0deg)`;

        if (progressStartValue === progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}

// header 
let ul = document.querySelector('header ul');
function openMenu(){
    ul.classList.add('open');
}
    function closeIcone(){
        ul.classList.remove('open');
    }