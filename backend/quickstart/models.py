from django.db import models

# Create your models here.
# class User(models.Model):
#     name = models.CharField(max_length=100)
#     firstname = models.CharField(max_length=100)
#     email = models.EmailField(unique=true)
#     sex = models.BooleanField()
class Author(models.Model):
    name_author = models.CharField(max_length=100)
    firstname_author = models.CharField(max_length=100)
    birth_date = models.DateField()

class Category(models.Model):
    name_cat = models.CharField(max_length=100)

class Book(models.Model):
    name_book = models.CharField(max_length=100)
    author = models.ForeignKey(Author, related_name='nameauth',on_delete=models.CASCADE)
    category = models.ForeignKey(Category, related_name='namecat', on_delete=models.CASCADE)
    total_pages = models.IntegerField()
    publish_date = models.DateField()
    cover = models.ImageField()




#class Track(models.Model):
#     album = models.OneToOneField(Album, related_name='tracks', on_delete=models.CASCADE)
#     order = models.IntegerField()
#     title = models.CharField(max_length=100)
#     duration = models.IntegerField()

