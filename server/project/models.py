from django.db import models


class colorMarkerEnum(models.TextChoices):
    YELLOW = '#fdba2c', 'жёлтый'
    RED = '#d22115', 'красный'
    GREEN = '#9acd32', 'зелёный'
    FUCSIA = '#a630a2', 'фуксия'
    BLACK =  '#1d1d1b', 'чёрный'


# Create your models here.
class AboutProject(models.Model):
    title = models.CharField(max_length=100, null=False)
    color = models.CharField(
        max_length=100, 
        choices=colorMarkerEnum.choices, 
        null=False,
        default=colorMarkerEnum.YELLOW
    )
    description = models.TextField(null=False)
    image = models.ImageField(upload_to='about')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    address = models.CharField(max_length=516, null=False)
    latitude = models.FloatField(null=False)
    longitude = models.FloatField(null=False)

    def __str__(self):
        return self.title
