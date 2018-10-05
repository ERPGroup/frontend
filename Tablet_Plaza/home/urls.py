from django.conf.urls import url
from . import views

urlpatterns = [
    url('index',views.index),
    url('collection',views.collection),
    url('register',views.register),
    url('login',views.login),
    url('product',views.product),
    url('cart',views.cart),
    url('history_order',views.history_order),
    url('order_detail',views.order_detail),
    url('profile',views.profile),
    url('payment',views.payment),
    url(r'^',views.index),
]
