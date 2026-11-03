import os
import asyncpg
from dotenv import load_dotenv
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from pydantic import BaseModel, EmailStr

# Правильно загружаем указанный файл
load_dotenv("../.env.file")


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Исправлено: database вместо name, port приведен к int
    app.state.pool = await asyncpg.create_pool(
        user=os.environ.get("User"),
        password=os.environ.get("DB_Password"),
        database=os.environ.get("DB_Name"),
        host=os.environ.get("host", "127.0.0.1"),
        port=int(os.environ.get("DB_Port", 5432)),
        max_size=5,
        min_size=1
    )
    yield
    await app.state.pool.close()


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class UserSchema(BaseModel):
    user: str
    email: EmailStr
    password: str


# Исправлено: добавлен async def
@app.post("/join")
async def create_user(user_data: UserSchema, request: Request):
    # Исправлено: берем пул из request
    POOL: asyncpg.Pool = request.app.state.pool

    # Исправлено: убраны лишние запятые в SQL-запросе
    query = """
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING id;
    """

    try:
        # Исправлено: fetchval возвращает само число ID напрямую в переменную
        inserted_id = await POOL.fetchval(query, user_data.user, user_data.email, user_data.password)

        return {
            "user": user_data.user,
            "email": user_data.email,
            "message": "Success!",
            "insert_id": inserted_id
        }
    except asyncpg.UniqueViolationError:
        raise HTTPException(status_code=400, detail="User or Email already exists")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
