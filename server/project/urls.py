from django.urls import path
from . import views

urlpatterns = [
    path('about/', views.ListAboutProjectAPIView.as_view(), name='index'),
    path('about/<int:pk>', views.DetailAboutProjectAPIView.as_view(), name='detail'),
]
