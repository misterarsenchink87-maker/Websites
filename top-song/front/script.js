const bth1 = document.getElementById("song1")
const bth2 = document.getElementById("song2")
const bth3 = document.getElementById("song3")
const music1 = document.getElementById("music1")
const music2 = document.getElementById("music2")
const music3 = document.getElementById("music3")
const count = document.getElementById("count")

async function loadCount() {

    const respon = await fetch("http://127.0.0.1:8000/listen")

    const data = await respon.json()

  

    count.textContent = data.play
}
bth1.addEventListener("click", async () => {
    if (music1.paused) {
        music1.play()
        const res1 = await fetch("http://127.0.0.1:8000/listen", {
            method: "POST"
        })
        const data1 = await res1.json()
        count.textContent = data1.play
        
    }
    else {
        music1.pause()
    }
})
bth2.addEventListener("click", async () => {
    if (music2.paused) {
        music2.play()
        const res2 = await fetch("http://127.0.0.1:8000/listen", {
            method: "POST"
        })
        const data2 = await res2.json()
        count.textContent = data2.play
    }
    else {
        music2.pause()
    }
})
bth3.addEventListener("click", async () => {
    if (music3.paused) {
        music3.play()
        const res3 = await fetch("http://127.0.0.1:8000/listen", {
            method: "POST"
        })
        const data3 = await res3.json()
        count.textContent = data3.play
    }
    else {
        music3.pause()
    }
})