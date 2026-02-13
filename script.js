const gifStages = [
    "https://media.tenor.com/EBV7OT7ACfwAAAAj/u-u-qua-qua-u-quaa.gif",
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAd/chiikawa-hachiware.gif",
    "https://media.tenor.com/f_rkpJbH1s8AAAAj/somsom1012.gif",
    "https://media.tenor.com/OGY9zdREsVAAAAAj/somsom1012.gif",
    "https://media1.tenor.com/m/WGfra-Y_Ke0AAAAd/chiikawa-sad.gif",
    "https://media.tenor.com/CivArbX7NzQAAAAj/somsom1012.gif"
]

const noMessages = [
    "No 😏",
    "Are you sure? 🤔",
    "Yoga please… 🥺",
    "Don’t break my heart 💔",
    "I will be really sad 😢",
    "Catch me if you can 😜"
]

let noClickCount = 0
let runawayEnabled = false
let musicPlaying = false

const catGif = document.getElementById('cat-gif')
const yesBtn = document.getElementById('yes-btn')
const noBtn = document.getElementById('no-btn')
const music = document.getElementById('bg-music')

/* 🎵 MUSIC FIX */
document.addEventListener('click', () => {
    if (!musicPlaying) {
        music.volume = 0.35
        music.play().catch(() => {})
        musicPlaying = true
    }
}, { once: true })

function toggleMusic() {
    if (musicPlaying) {
        music.pause()
        musicPlaying = false
    } else {
        music.play()
        musicPlaying = true
    }
}

function handleYesClick() {
    window.location.href = 'yes.html'
}

function handleNoClick() {
    noClickCount++

    const msgIndex = Math.min(noClickCount, noMessages.length - 1)
    noBtn.textContent = noMessages[msgIndex]

    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize)
    yesBtn.style.fontSize = `${currentSize * 1.35}px`

    const gifIndex = Math.min(noClickCount, gifStages.length - 1)
    swapGif(gifStages[gifIndex])

    if (noClickCount >= 3 && !runawayEnabled) {
        enableRunaway()
        runawayEnabled = true
    }
}

function swapGif(src) {
    catGif.style.opacity = '0'
    setTimeout(() => {
        catGif.src = src
        catGif.style.opacity = '1'
    }, 200)
}

function enableRunaway() {
    noBtn.addEventListener('mouseover', runAway)
}

function runAway() {
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth)
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight)

    noBtn.style.position = 'fixed'
    noBtn.style.left = `${randomX}px`
    noBtn.style.top = `${randomY}px`
}
