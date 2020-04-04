from rest_framework import serializers 
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate




# User Serialzer

class UserSerializer (serializers.ModelSerializer):
  
    class Meta:
       User = get_user_model()
       model=User
       fields=('email','first_name','last_name','email')
       extra_kwargs = {'password': {'write_only': True}}
# Register Serialzer
class RegisterSerializer (serializers.ModelSerializer):
    class Meta:
       User = get_user_model()
       model=User
       fields=('email','first_name','last_name','password')
    
    def create(self, validated_data):            
        User = get_user_model()
        user = User.objects.create_user(validated_data['email'], validated_data['first_name'], validated_data['last_name'],validated_data['password'])
        return user
# Login Serializer
class LoginSerializer(serializers.Serializer):
  email = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")

