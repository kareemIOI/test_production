from urllib.parse import urlparse
from django.urls import path

from django.contrib import admin

from . import views

urlpatterns = [
    path('', views.home, name = 'home'),
    path('singup', views.signup, name = 'signup'),
    path('activate')
]
