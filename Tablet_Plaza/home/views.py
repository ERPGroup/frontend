from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def collection(request):
    return render(request,'pages/collection.html')
def index(request):
    return render(request,'pages/index.html')
def register(request):
    return render(request,'pages/register.html')
def login(request):
    return render(request,'pages/login.html')
def product(request):
    return render(request,'pages/product.html')
def cart(request):
    return render(request,'pages/cart.html')
