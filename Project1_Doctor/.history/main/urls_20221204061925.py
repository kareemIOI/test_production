from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.index, name  = 'index'),
    path('register', views.main, name = 'register'),
    path('main/', views.main, name = "main"),

]
#! mostly done here!