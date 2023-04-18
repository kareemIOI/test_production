from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.index, name  = 'index'),    
    path('logout', views.logout, name = 'logout'),
    path('required_login', views.required_login, name = 'required_login'),
    path('Signup', views.Signup, name = 'Signup'),
    path('login', views.login, name = 'login'),
]