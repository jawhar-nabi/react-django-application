from django.urls import path

from . import views

urlpatterns = [
    # ex: /search_url/5/
    path('searchurl/<str:item>/', views.Search, name='detail'),
]