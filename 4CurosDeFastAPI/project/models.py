
from pydantic import BaseModel



class Customer(BaseModel):
    id: int
    name: str
    description: str |None
    email: str |None
    age: int |None



class Transaction(BaseModel):
    id:  int  
    amount: int
    description: str 


class Invoice(BaseModel):
    id: int
    customer :Customer
    transactions : list[Transaction]    
    total : int
    
    @property
    def amount_total(self):
        return sum(transaction.amount for transaction in self.transactions)