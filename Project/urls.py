from django.contrib import admin
from django.urls import path,include
from . import veiws
urlpatterns = [
    path('', veiws.home, name='home'),           # Home page
    path('/calculator',veiws.about),
]
