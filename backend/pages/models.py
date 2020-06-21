from django.db import models
from django.conf import settings
from django.core.validators import MaxValueValidator, MinValueValidator


# Create your models here.


class Book(models.Model):
    
    #iduser       = models.ManyToManyField(settings.AUTH_USER_MODEL) 
    isbn        = models.CharField(max_length=120, null=True, blank=True)
    title       = models.CharField(max_length=120, null=True, blank=True)
    auteur      = models.CharField(max_length=120, null=True, blank=True)
    content     = models.TextField(max_length=120, null=True, blank=True)
    timestamp   = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.user.username)

    @property
    def owner(self):

        return self.auteur



#####Type
  
class Type_Book(models.Model):
    
    type_name           = models.CharField(max_length=120, null=True, blank=True)
    descrip             = models.CharField(max_length=120, null=True, blank=True)



#####Feedback


  
class Feedback(models.Model):
    
    #user             = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) 
    #book             = models.ForeignKey(Book, on_delete=models.CASCADE) 
    etat             = models.IntegerField( default=0,validators=[MaxValueValidator(0), MinValueValidator(3)]) 
    avis             = models. NullBooleanField()


######search 

class Search(models.Model):
    
    iduser      = models.ForeignKey(settings.AUTH_USER_MODEL ,on_delete=models.CASCADE) 
    content     = models.TextField(max_length=120, null=True, blank=True)
    timestamp   = models.DateTimeField(auto_now_add=True)
 
