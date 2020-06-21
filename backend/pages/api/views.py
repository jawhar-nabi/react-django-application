#generic

from rest_framework import generics ,filters
from ..models import Book,Type_Book
from .serializers import SearchListSerializer, BookListSerializer,BookDetailSerializer,TypeDetailSerializer



##____________________________________BOOK__CRUD___________________________________________________##

class BookCAPIView(generics.CreateAPIView):
    lookup_field            = 'pk'
    queryset                = Book.objects.all() 
    serializer_class        = BookDetailSerializer 

class BookDAPIView(generics.DestroyAPIView):
    lookup_field            = 'pk'
    queryset                = Book.objects.all() 
    serializer_class        = BookDetailSerializer  

class BookUAPIView (generics.UpdateAPIView):
    lookup_field            = 'pk'
    queryset                = Book.objects.all() 
    serializer_class        = BookDetailSerializer 

class BookDetailAPIView(generics.RetrieveAPIView):
    lookup_field            = 'pk'
    queryset                = Book.objects.all() 
    serializer_class        = BookDetailSerializer 



##_____________________________________ALL_Book_List______________________________________________##

class BookListAPIIView(generics.ListAPIView):
    queryset                = Book.objects.all() #or redirect the function  def get_queryset() : return ...
    serializer_class        = BookListSerializer

##______________________________________search_for_book___________________________________________##

class SearchAPIView(generics.ListCreateAPIView):
    #search_fields = ['title','auteur']
    search_fields = ['title','auteur'] #____________recherche b ay attribut n7bou aalih
    filter_backends = (filters.SearchFilter,)
    queryset = Book.objects.all()
    serializer_class = SearchListSerializer





###############________________________________Type_Book_CRUD____________________________


class TypeCAPIView(generics.CreateAPIView):
    lookup_field            = 'pk'
    queryset                = Type_Book.objects.all() 
    serializer_class        = TypeDetailSerializer 

class TypeDAPIView(generics.DestroyAPIView):
    lookup_field            = 'pk'
    queryset                = Book.objects.all() 
    serializer_class        = TypeDetailSerializer  

class TypeUAPIView (generics.UpdateAPIView):
    lookup_field            = 'pk'
    queryset                = Type_Book.objects.all() 
    serializer_class        = TypeDetailSerializer 

class TypeDetailAPIView(generics.RetrieveAPIView):
    lookup_field            = 'pk'
    queryset                = Type_Book.objects.all() 
    serializer_class        = TypeDetailSerializer 

class TypeListAPIIView(generics.ListAPIView):
    queryset                = Type_Book.objects.all() #or redirect the function  def get_queryset() : return ...
    serializer_class        = TypeDetailSerializer
