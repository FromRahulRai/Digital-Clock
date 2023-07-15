let hour = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let ampm = document.getElementById('ampm')

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ext = "AM"

    if (h > 12) {
        h = h - 12
        ext = "PM"
    }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

        hour.innerText = h
    minutes.innerText = m
    seconds.innerText = s
    ampm.innerText = ext

    setTimeout(() => {
        updateClock()
    }, 1000)
}

updateClock()
