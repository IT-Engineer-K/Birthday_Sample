var music = new Audio('birthday.mp3');
var text = document.getElementById('message');
var text_position = -100


function start() {
    music.play();
    setInterval(countUp, 100)
    start_confetti()
    document.getElementsByTagName('div')[0].style.display = 'block';
    document.getElementsByTagName('button')[0].remove()
    document.getElementsByTagName('video')[0].play()
}

const countUp = () => {
    if (text_position < 0) {
        text_position++;
        text.style.bottom = text_position.toString(10) + 'px';
        text.style.opacity = (1 + text_position / 100).toString(10);
    }
}

const start_confetti = function confettiAnime() {
    confetti({
        origin: {
            x: Math.random(),
            y: 0
        },
        ticks: 1000,
    })
    setTimeout(function() {
        requestAnimationFrame(confettiAnime)
    }, 1000)
}