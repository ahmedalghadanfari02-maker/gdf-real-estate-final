from django.urls import path
from . import views

urlpatterns = [
    
    path('properties/', views.get_properties, name='get_properties'),
    
    
    path('properties/<int:pk>/', views.get_property, name='get_property'),
]