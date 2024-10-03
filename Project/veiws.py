# myapp/views.py

from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return HttpResponse("<h1>Welcome to My Django App!</h1>")

def about(request):
    return render(request, 'about.html')  # Render an HTML template for the about page
