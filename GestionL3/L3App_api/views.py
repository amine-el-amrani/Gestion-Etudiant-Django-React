
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from L3App.models import *
from .serializers import *



class GroupeViewset(viewsets.ModelViewSet):
    queryset = Groupe.objects.all()
    serializer_class = GroupeSerializer


class ProfesseurViewset(viewsets.ModelViewSet):
    queryset = Professeur.objects.all()
    serializer_class = ProfesseurSerializer



class MatiereViewset(viewsets.ModelViewSet):
    queryset = Matiere.objects.all()
    serializer_class = MatiereSerializer



class EtudiantViewSet(viewsets.ModelViewSet):
    serializer_class=EtudiantSerializer
    def get_queryset(self):
        return Etudiant.EtudiantsObjects.all()


class SemestreViewset(viewsets.ModelViewSet):
    queryset = Semestre.objects.all()
    serializer_class = SemestreSerializer


class UeViewset(viewsets.ModelViewSet):
    queryset = Ue.objects.all()
    serializer_class = UeSerializer


