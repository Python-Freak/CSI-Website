from django.http import JsonResponse
import json
import datetime
from django.views.decorators.csrf import csrf_exempt
from .members import Member

@csrf_exempt
def create_member(req):
    if req.method == "POST":
        data = req.body.decode('utf-8')
        body = json.loads(data)
        name = body["name"]
        roll_no = body["roll_no"]
        csi_id = body["csi_id"]
        expiry_date = datetime.datetime.strptime(body["expiry_date"], "%b %d,%Y").date()
        print(expiry_date)
        is_board_member = (body["is_board_member"] == 'True')
        try:
            member = Member.objects.create(name=name, roll_no=roll_no, csi_id=csi_id, expiry_date=expiry_date, is_board_member=is_board_member)
            member.save()
            return JsonResponse({"saved": True})
        except:
            return JsonResponse({"saved": False})
            
    