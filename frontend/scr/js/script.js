const mario = document.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const pipe = document.querySelector('.pipe');
    const pipePosition = pipe.offsetLeft;
    
    if (pipePosition <= 120) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
    }
}, 10);

document.addEventListener('keydown', jump);