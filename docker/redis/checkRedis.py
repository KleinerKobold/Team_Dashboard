import redis
import json

r = redis.StrictRedis(host='localhost', port=6379, db=0, password="sOmE_sEcUrE_pAsS", socket_timeout=None, connection_pool=None, charset='utf-8', errors='strict', unix_socket_path=None)

memberDic = {
    "id": 0, 
    "name": "Flash"
    }
rval= r.set('TeamMember_0', json.dumps(memberDic))
if rval:
    print("redis TeamMember_0 was set")

data = r.get('TeamMember_0')
print(f"TeamMember_0 = {json.loads(data)}")
