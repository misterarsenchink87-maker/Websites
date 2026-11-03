from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],

)
class User(BaseModel):
    username: str
    password: str

@app.post("/users")
def register(user: User):
    return {"message":f"User {user.username} is created"}





