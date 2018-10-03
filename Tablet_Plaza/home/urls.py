from django.conf.urls import url
from . import views

urlpatterns = [
    url('index/',views.index),
    url('collection/',views.collection),
    url('register/',views.register),
    url('login/',views.login),
    url('product/',views.product),
    url('cart/',views.cart),
]
