import { informacoes } from "./bd.js"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function smoothScrollTo(element, duration) {
    const startY = window.pageYOffset;
    const targetY = element.getBoundingClientRect().top + startY;
    const distance = targetY - startY;
    let startTime = null;
  
    function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const timeElapsed = timestamp - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    window.scrollTo(0, startY + distance * progress);
    if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

const btn = document.querySelector('.container button');
const slides = document.querySelector('.slides');
btn.addEventListener('click', () => smoothScrollTo(slides, 700));
  
///////////

let retornarbtn = document.querySelector('#buttonA')
let avancarbtn = document.querySelector('#buttonB')

let i = 0

retornarbtn.onclick = retornar
avancarbtn.onclick = avancar


function retornar() {
    if(i != 0) {
        i = i - 1

        let conteudo = document.querySelector('.slidesConteudo')
 
        let titulo = document.querySelector('.slides h2')
        let img = document.querySelector('.slides img')
        let descricao = document.querySelector('.slides p')



        conteudo.style.transition = "1s"
        conteudo.style.transform = "translateX(200%)"
        sleep(600).then(() => { 
            titulo.textContent = informacoes[i].titulo
            img.src = informacoes[i].img
            descricao.textContent = informacoes[i].descricao

            conteudo.style.transition = "0s"
            conteudo.style.transform = "translateX(-200%)"
            
            sleep(100).then(() => { 
                conteudo.style.transition = "1s"
                conteudo.style.transform = "translateX(0%)"
            })
        });
    
    }
}


function avancar() {
    if(i != 9) {
        i = i + 1

        let conteudo = document.querySelector('.slidesConteudo')
 
        let titulo = document.querySelector('.slides h2')
        let img = document.querySelector('.slides img')
        let descricao = document.querySelector('.slides p')



        conteudo.style.transition = "1s"
        conteudo.style.transform = "translateX(-200%)"
        sleep(600).then(() => { 
            titulo.textContent = informacoes[i].titulo
            img.src = informacoes[i].img
            descricao.textContent = informacoes[i].descricao

            conteudo.style.transition = "0s"
            conteudo.style.transform = "translateX(200%)"
            
            sleep(100).then(() => { 
                conteudo.style.transition = "1s"
                conteudo.style.transform = "translateX(0%)"
            })
        });
    
    }
}

