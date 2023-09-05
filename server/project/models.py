from django.db import models

# Create your models here.
class AboutProject(models.Model):
    title = models.CharField(max_length=100, null=False)
    description = models.TextField(null=False)
    image = models.ImageField(upload_to='about')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    latitude = models.FloatField(null=False)
    longitude = models.FloatField(null=False)

    def __str__(self):
        return self.title