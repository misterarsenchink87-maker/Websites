const main = document.getElementById("main-content")
const regist = document.getElementById("parent")
const bth = document.getElementById("button")
const home = document.getElementById("home")

const burger = document.getElementById("burger")
const menu = document.getElementById("menu")
const overlay = document.getElementById("overlay")
burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    menu.classList.toggle("active")
    overlay.classList.toggle("active")
bth.addEventListener("click", () => {
    burger.classList.remove("active")
    menu.classList.remove("active")
    overlay.classList.remove("active")
})
home.addEventListener("click", () => {
    burger.classList.remove("active")
    menu.classList.remove("active")
    overlay.classList.remove("active")
})
})

const warning = document.getElementById("warn")
bth.addEventListener("click", () => {
    main.style.opacity = "0"
    
    setTimeout(() => {
        main.classList.remove("active")
        main.classList.add("hidden")

        regist.classList.remove("hidden")
        regist.classList.add("active")
        regist.style.opacity = "0"
        
        setTimeout(() => {
            regist.style.opacity = "1"
        }, 50)
    },500)
   
})

home.addEventListener("click", () => {
    regist.style.opacity = '0'
    
    setTimeout(() => {
        regist.classList.remove("active")
        regist.classList.add("hidden")
        
        main.classList.remove("hidden")
        main.classList.add("active")
        main.style.opacity = "0"

        setTimeout(() => {
            main.style.opacity = "1"
        }, 50)
    }, 500)
})

const Sendbth = document.getElementById("send")
Sendbth.addEventListener("click",async (e) => {
    e.preventDefault()
    await Sub()

    regist.style.opacity = '0'
    
    setTimeout(() => {
        regist.classList.remove("active")
        regist.classList.add("hidden")
        
        main.classList.remove("hidden")
        main.classList.add("active")
        main.style.opacity = "0"

        setTimeout(() => {
            main.style.opacity = "1"
        }, 50)
    }, 500)
})

async function  Sub() {
    const name = document.getElementById("name").value
    const email = document.getElementById("Email").value
    const password = document.getElementById("password").value
    if(!name || !email || !password) {
        warning.classList.remove("hid")
        warning.classList.add("act")
        
    }
    
    
    const response = await fetch("http://127.0.0.1:8000/join", 
        {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user:name,
                email: email,
                password: password
            })
        }
    )
    const data = await response.json()
    localStorage.setItem("name", data.user)
    const user_name = localStorage.getItem("name")
    document.getElementById("response_name").textContent = "Hello," + user_name + "!"
    console.log(data)

       const account =  document.createElement("button")
       account.textContent = "Account"
       account.classList.add("account")
       document.body.appendChild(account)
       
       account.addEventListener("click", () => {
        const box = document.createElement("div")
        box.classList.add("overlay")
        const inside_box = document.createElement("div")
        inside_box.classList.add("profile-box")

        const title = document.createElement("h2")
        title.classList.add("object")
        title.textContent = "My Profile"
        const put_username = document.createElement("p")
        put_username.classList.add("put_username")
        put_username.textContent = "Name:" +  data.user
        const put_email = document.createElement("p")
        put_email.classList.add("put_email")
        put_email.textContent = "Email:" + data.email

        const close = document.createElement("button")
        close.classList.add("close_bth")
        close.textContent = "Close"

        inside_box.appendChild(title)
        inside_box.append(put_username)
        inside_box.append(put_email)
        inside_box.append(close)
        
        box.append(inside_box)

        document.body.appendChild(box)
        close.addEventListener("click", () => {
              box.remove()
        })
       })

}