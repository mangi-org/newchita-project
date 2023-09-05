from rest_framework import serializers
from . import models

class AboutProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AboutProject
        fields = '__all__'