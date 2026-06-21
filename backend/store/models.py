from django.db import models
from django.contrib.auth.models import User 

class Category(models.Model):
    name = models.CharField(max_length=100, unique = True)
    slug = models.SlugField(unique =True)

    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.ForeignKey(Category, related_name = 'products',on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.TextField(blank = True)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    image = models.URLField(blank=True)
    created_at = models.DataTimeField(auto_now_add = True)

    def __str__(self):
        return self.name

class UserProfile(models,Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=10,blank=True)

    def __str__(self):
        return self.user.username

