from django.db import models

# Create your models here.
class Test(models.Model):
    test_file = models.FileField()