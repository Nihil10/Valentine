let musicPlaying = false

window.addEventListener("load", () => {
    launchConfetti()

    const music = document.getElementById("bg-music")
    music.volume = 0.4
    music.play().catch(() => {})
    musicPlaying = true
})

function launchConfetti() {
    const duration = 4000
    const end = Date.now() + duration

    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval)
            return
        }

        confetti({
            particleCount: 80,
            spread: 100
        })
    }, 250)
}

function toggleMusic() {
    const music = document.getElementById("bg-music")

    if (musicPlaying) {
        music.pause()
        musicPlaying = false
    } else {
        music.play()
        musicPlaying = true
    }
}
