from rest_framework.generics import ListAPIView, RetrieveAPIView
from . import models, serializer


class ListAboutProjectAPIView(ListAPIView):
    queryset = models.AboutProject.objects.all()  # Provide the queryset here
    serializer_class = serializer.AboutProjectSerializer


class DetailAboutProjectAPIView(RetrieveAPIView):
    queryset = models.AboutProject.objects.all()  # Provide the queryset here
    serializer_class = serializer.AboutProjectSerializer
