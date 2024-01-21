from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from .models import Test
import pyrebase
import os

config = {
    "apiKey": os.getenv("FIREBASE_API_KEY"),
    "authDomain": os.getenv("FIREBASE_AUTH_DOMAIN"),
    "projectId": os.getenv("FIREBASE_PROJECT_ID"),
    "storageBucket": os.getenv("FIREBASE_STORAGE_BUCKET"),
    "messagingSenderId": os.getenv("FIREBASE_MESSAING_SENDER_ID"),
    "appId": os.getenv("FIREBASE_APP_ID"),
    "measurementId": os.getenv(""),
    "databaseURL": "FIREBASE_MEASUREMENT_ID"
}
firebase = pyrebase.initialize_app(config)
storage = firebase.storage()

@csrf_exempt
def test_file(req):
    file = req.FILES['test']
    
    storage.child("files/" + file.name).put(file)

    return JsonResponse({"code": 200})