import pandas as pd
import requests
import json

data = pd.read_csv('members.csv', header='infer')

print(data["ROLE"].unique())

for i in range(data.shape[0]):
    elem = data.iloc[i, :]
    csi_id = elem["CSI ID"]
    roll_no = elem["ROLL NO"]
    name = elem["Name"]
    validity = elem["VALID TILL"]
    is_board_member = (elem["ROLE"] == 'CSI BOARD MEMBER')
    json_data = {
        "csi_id":  csi_id,
        "roll_no": roll_no,
        "name": name,
        "expiry_date": validity,
        "is_board_member": str(is_board_member),
    }
    # Theres some async request library available try that for faster transfer
    resopnse = requests.post("http://127.0.0.1:8000/auth/add-member/", data=json.dumps(json_data))
    print(f"CSI ID : {csi_id}, RESPONSE : {json.loads(resopnse.text)['saved']}")