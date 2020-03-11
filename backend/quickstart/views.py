from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import permissions
from backend.quickstart.serializers import UserSerializer,BookSerializer, CategorySerializer, AuthorSerializer
from backend.quickstart.models import Author,Book, Category
from rest_framework.response import Response
from rest_framework import status


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


# class AlbumViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows groups to be viewed or edited.
#     """
#     queryset = Album.objects.all()
#     serializer_class = AlbumSerializer
#     def create(self, request, *args, **kwargs):
#             vv=Album.objects.create(album_name=request.data.get('album_name')+"mp3", artist=request.data.get('artist'))

#             return Response(vv)
# class TrackViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows groups to be viewed or edited.
#     """
#     queryset = Track.objects.all()
#     serializer_class = TrackSerializer


class AuthorViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
