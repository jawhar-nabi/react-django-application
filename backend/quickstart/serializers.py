from django.contrib.auth.models import User
from rest_framework import serializers
from backend.quickstart.models import Book,Category,Author


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'firstname', 'email', 'sex']


# class GroupSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Group
#         fields = ['url', 'name']

class BookSerializer(serializers.ModelSerializer):
    # name_author = serializers.StringRelatedField(many=False)
    # firstname_author = serializers.StringRelatedField(many=False)

    class Meta:
        model = Book
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'

class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Author
        fields = '__all__'