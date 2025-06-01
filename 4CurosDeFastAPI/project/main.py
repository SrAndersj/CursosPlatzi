from fastapi import FastAPI  #la F es mayuscula indicando que es
#una clase 
from datetime import datetime



app = FastAPI()


#el decorador es @app.get("/")
@app.get("/")

async def root():
    return {"message": "Bienvenido a mi API FastAPI!"}   


@app.get("/hora")
async def get_hora():
    # Obtener la hora actual en UTC
    hora_actual = datetime.now() #da la hora actual en UTC
    
    return {
        "hora": hora_actual.strftime("%Y-%m-%d %H:%M:%S"),
        "timezone": "UTC"
    }