from django.contrib import admin
from django.urls import path, include, re_path
from .views import test_file

urlpatterns = [
    path('test/', test_file),
]