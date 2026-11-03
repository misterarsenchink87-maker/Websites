from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],

)
a = 0

@app.post("/listen")
def listen():
    global a
    a = a+1

    return {"play" : a}
@app.get("/listen")
def count():
    global a
    return {"play" : a}


