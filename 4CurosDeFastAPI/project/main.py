# from pytz import country_timezones


import zoneinfo
from fastapi import FastAPI  #la F es mayuscula indicando que es
#una clase 
from datetime import datetime
from pydantic import BaseModel



class Customer(BaseModel):
    name: str
    description: str |None
    email: str |None
    age: int |None
    
    


app = FastAPI()


#el decorador es @app.get("/")
@app.get("/")

async def root():
    return {"message": "Bienvenido a mi API FastAPI!"}   



country_timezones = {
    "CO": "America/Bogota",
    "MX": "America/Mexico_City",
    "PE": "America/Lima",   
    "BR": "America/Sao_Paulo",
}




@app.get("/time/{iso_code}")
async def time(iso_code: str):
    iso = iso_code.upper()
    timezone_str = country_timezones.get(iso)
    tz = zoneinfo.ZoneInfo(timezone_str)

    return {  timezone_str +  "time":datetime.now(tz)}


    # podemo usarlo  
    # http://127.0.0.1:8000/time/co



#api rest usa post  , una api reste es un protocolo que define como debe funcionar
# 
@app.post("/customers")
async def create_customer(customer_data: Customer):
    return customer_data