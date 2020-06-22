from rest_framework.serializers import ModelSerializer
from ..models import Book,Type_Book



##########BOOK

class BookDetailSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = [    'pk',
                      'title' ,
                      'content' , 
                  ]
        #read_only_fields = ['id', 'user']


class BookListSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'


class SearchListSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'




##########Type


class TypeDetailSerializer(ModelSerializer):
    class Meta:
        model = Type_Book

        fields = [    'pk','type_name',
                      'descrip' , 
                  ]
        #read_only_fields = ['id', 'user']




##########Feedback
