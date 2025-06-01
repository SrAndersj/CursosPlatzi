from fastapi import FastAPI  #la F es mayuscula indicando que es
#una clase 



app = FastAPI()


#el decorador es @app.get("/")
@app.get("/")

async def root():
    return {"message": "Hello World  desde cambio "}   