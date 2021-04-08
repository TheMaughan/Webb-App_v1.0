from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('add', views.add, name='add'),
    path('display/<str:item_id>', views.display, name='display'),
    path('', views.invite, name='invite'),
]