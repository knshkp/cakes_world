from django.db import models
from django.contrib.auth.models import User
class Cake(models.Model):
   name=models.CharField(max_length=100)
   priceS=models.IntegerField(default=100)
   priceM=models.IntegerField(default=100)
   priceL=models.IntegerField(default=100)
   images=models.URLField()




class Pastrie(models.Model):
   name=models.CharField(max_length=100)
   priceS=models.IntegerField(default=100)
   priceM=models.IntegerField(default=100)
   priceL=models.IntegerField(default=100)
   images=models.URLField()
