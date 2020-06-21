
from django.contrib import admin
from django.conf.urls import url
from django.urls import path
from .views import (
    BookListAPIIView,
    BookDetailAPIView,
    BookDAPIView,
    BookUAPIView,
    BookCAPIView,
    SearchAPIView,
    TypeDetailAPIView,
    TypeDAPIView,
    TypeUAPIView,
    TypeCAPIView,
    TypeListAPIIView,
    )


urlpatterns = [
    url(r'books/',BookListAPIIView.as_view(),name="book-list"),
    url(r'^book/(?P<pk>\d+)/$',BookDetailAPIView.as_view(),name="book-detail"),
    url(r'^book/(?P<pk>\d+)/edit/$',BookUAPIView.as_view(),name="book-edit"),
    url(r'^book/(?P<pk>\d+)/delete/$',BookDAPIView.as_view(),name="book-delete"),
    url(r'^book/$',BookCAPIView.as_view(),name="book-create"),
    path('search_book/', SearchAPIView.as_view()),
    
    url(r'type_books/',TypeListAPIIView.as_view(),name="type-book-list"),
    url(r'^type_book/(?P<pk>\d+)/$',TypeDetailAPIView.as_view(),name="typebook-detail"),
    url(r'^type_book/(?P<pk>\d+)/edit/$',TypeUAPIView.as_view(),name="typebook-edit"),
    url(r'^type_book/(?P<pk>\d+)/delete/$',TypeDAPIView.as_view(),name="typebook-delete"),
    url(r'^type_book/$',TypeCAPIView.as_view(),name="type-book-create"),
    
]
