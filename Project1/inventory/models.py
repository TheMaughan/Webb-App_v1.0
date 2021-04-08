from django.db import models

# Create your models here.

class Item(models.Model):
    item_id = models.CharField(max_length=10, unique=True)
    description = models.CharField(max_length=100)
    value = models.FloatField()
    hazardous = models.BooleanField()