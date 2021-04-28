from typing import Optional
from fastapi import FastAPI

import redis
import json
from models.team_member import Team_Member

app = FastAPI()
r = redis.StrictRedis(host='localhost', port=6379, db=0, password="sOmE_sEcUrE_pAsS", socket_timeout=None, connection_pool=None, charset='utf-8', errors='strict', unix_socket_path=None)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/teammember/{item_id}")
def read_teammember(item_id: int):
    head = {"item_id": item_id}
    data = r.get(f"TeamMember_{item_id}")
    memberData = json.loads(data)
    rdict = head | memberData

    return rdict

@app.put("/teammember/{item_id}")
def put_teammember(item_id: int, item: Team_Member):
    head = {"item_id": item_id}
    return r.set(f"TeamMember_{item_id}", json.dumps(head|item.dict()))

@app.get("/teammembers/")
def get_list_all_members():
    return None