from djoser.conf import django_settings
import requests
from django.http import HttpResponse
from django import views
from django.urls import reverse

def activate_user_by_get(request, uid, token, format = None):
    if request.method == "GET":
        payload = {'uid': uid, 'token': token}

        url = '{0}://{1}{2}'.format(django_settings.PROTOCOL, django_settings.DOMAIN, '/auth/users/activation/')
        response = requests.post(url, data = payload)

        if response.status_code == 204:
            return HttpResponse("SUCCESSFULL")
        else:
            return HttpResponse("UNSUCCESSFULL")
        
def password_reset_confirm(request, uid, token, format = None):
    if request.method == "GET":
        # MAKE A PAGE
        payload = {'uid': uid, 'token': token}

        url = '{0}://{1}{2}'.format(django_settings.PROTOCOL, django_settings.DOMAIN, reverse('user-reset-password-confirm'))
        response = requests.post(url, data = payload)

        if response.status_code == 204:
            return HttpResponse("SUCCESSFULL")
        else:
            return HttpResponse("UNSUCCESSFULL")