const user = document.getElementById("username")
const password = document.getElementById("password")
const submit = document.getElementById("bth")
const wel = document.getElementById("welcome")
submit.addEventListener("click", async(event) => {
    event.preventDefault()
    const res = await fetch("http://127.0.0.1:8000/users" ,{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            username: user.value,
            password: password.value
        })
    }
       
    )
    const data = await res.json()
    console.log(data)
})